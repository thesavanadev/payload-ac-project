import { isAdminOrHasSiteAccess } from "@/payload-access/isAdminOrHasSiteAccess";
import { isSignedIn } from "@/payload-access/isSignedIn";

import type { CollectionConfig } from "payload";

const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		defaultColumns: ["filename", "alt", "mimeType", "site"],
	},
	access: {
		// anyone signed in can create
		create: isSignedIn,
		// only admins or editors with site access can update
		update: isAdminOrHasSiteAccess(),
		// only admins or editors with site access can read
		read: isAdminOrHasSiteAccess(),
		// only admins or editors with site access can delete
		delete: isAdminOrHasSiteAccess(),
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
		{
			name: "site",
			type: "relationship",
			relationTo: "sites",
			required: true,
			// if user is not admin, set the site by default
			// to the first site that they have access to
			defaultValue: ({ user }: { user: { roles: string[]; sites?: string[] } }) => {
				if (!user.roles.includes("admin") && user.sites?.[0]) {
					return user.sites[0];
				}
			},
		},
	],
	upload: {
		adminThumbnail: "thumbnail",
		focalPoint: true,
		imageSizes: [
			{
				name: "thumbnail",
				width: 300,
			},
			{
				name: "square",
				width: 500,
				height: 500,
			},
			{
				name: "small",
				width: 600,
			},
			{
				name: "medium",
				width: 900,
			},
			{
				name: "large",
				width: 1400,
			},
			{
				name: "xlarge",
				width: 1920,
			},
			{
				name: "og",
				width: 1200,
				height: 630,
				crop: "center",
			},
		],
		mimeTypes: ["image/*"],
	},
};

export default Media;
