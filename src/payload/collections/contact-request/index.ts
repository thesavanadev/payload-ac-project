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
		},
	],
};

export default ContactRequest;
