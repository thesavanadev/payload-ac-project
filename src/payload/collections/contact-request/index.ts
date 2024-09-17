import {
	FixedToolbarFeature,
	HeadingFeature,
	HTMLConverterFeature,
	InlineToolbarFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

import { anyone } from "@/payload/access/anyone";
import { isAdmin } from "@/payload-access/isAdmin";
import { noone } from "@/payload-access/noone";

import type { CollectionConfig } from "payload";

const ContactRequest: CollectionConfig = {
	slug: "contact-requests",
	labels: {
		singular: "Contact Request",
		plural: "Contact Requests",
	},
	admin: {
		defaultColumns: ["id", "createdAt"],
	},
	access: {
		// anyone can create, even unauthenticated
		create: anyone,
		// no one can update, ever
		update: noone,
		// only admins can read
		read: isAdmin,
		// no one can delete, ever
		delete: noone,
	},
	fields: [
		{
			name: "message",
			label: "Message",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [
						...rootFeatures,
						FixedToolbarFeature(),
						HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
						/* the HTMLConverterFeature manages the HTML serializers */
						HTMLConverterFeature({}),
						InlineToolbarFeature(),
					];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("message", { name: "message_html" }),
	],
};

export default ContactRequest;
