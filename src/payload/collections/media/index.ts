import type { CollectionConfig } from "payload";

const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		defaultColumns: ["filename", "alt", "mimeType"],
	},
	access: {},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
	upload: {
		mimeTypes: ["image/*"],
		resizeOptions: { width: 1280 },
	},
};

export default Media;
