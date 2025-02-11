import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { resendAdapter } from "@payloadcms/email-resend";
import { BoldFeature, ItalicFeature, LinkFeature, lexicalEditor, UnderlineFeature } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { buildConfig } from "payload";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

import ContactRequest from "@/payload-collections/contact-request";
import Media from "@/payload-collections/media";
import Pages from "@/payload-collections/pages";
import Sites from "@/payload-collections/sites";
import Users from "@/payload-collections/users";

import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		importMap: {
			baseDir: path.resolve(dirname),
		},
		meta: {
			titleSuffix: " | Payload",
		},
		user: Users.slug,
	},
	collections: [Sites, Pages, Media, ContactRequest, Users],
	db: sqliteAdapter({
		client: {
			url: process.env.DATABASE_URI!,
			authToken: process.env.DATABASE_AUTH_TOKEN!,
		},
	}),
	editor: lexicalEditor({
		features: () => {
			return [
				BoldFeature(),
				ItalicFeature(),
				LinkFeature({
					enabledCollections: ["pages"],
					fields: ({ defaultFields }) => {
						const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
							if ("name" in field && field.name === "url") return false;
							return true;
						});
						return [
							...defaultFieldsWithoutUrl,
							{
								name: "url",
								type: "text",
								admin: {
									condition: ({ linkType }) => linkType !== "internal",
								},
								label: ({ t }) => t("fields:enterURL"),
								required: true,
							},
						];
					},
				}),
				UnderlineFeature(),
			];
		},
	}),
	email: resendAdapter({
		defaultFromAddress: "hello@s3.co.ke",
		defaultFromName: "Mailer @ S3",
		apiKey: process.env.RESEND_API_KEY!,
	}),
	globals: [],
	plugins: [
		seoPlugin({}),
		uploadthingStorage({
			collections: {
				[Media.slug]: true,
			},
			options: {
				token: process.env.UPLOADTHING_TOKEN!,
				acl: "public-read",
			},
		}),
	],
	secret: process.env.PAYLOAD_SECRET!,
	sharp,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
});
