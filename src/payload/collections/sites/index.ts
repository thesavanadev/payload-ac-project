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
	access: {},
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
