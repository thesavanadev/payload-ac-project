import { isAdmin } from "@/payload-access/isAdmin";
import { isAdminOrHasSiteAccess } from "@/payload-access/isAdminOrHasSiteAccess";

import type { CollectionConfig } from "payload";

const Sites: CollectionConfig = {
	slug: "sites",
	labels: {
		singular: "Site",
		plural: "Sites",
	},
	admin: {
		defaultColumns: ["title", "createdAt"],
		useAsTitle: "title",
	},
	access: {
		// only admins can create
		create: isAdmin,
		// only admins or editors with site access can read
		read: isAdminOrHasSiteAccess("id"),
		// only admins can update
		update: isAdmin,
		// only admins can delete
		delete: isAdmin,
	},
	fields: [
		{
			name: "title",
			label: "Title",
			type: "text",
			required: true,
		},
	],
};

export default Sites;
