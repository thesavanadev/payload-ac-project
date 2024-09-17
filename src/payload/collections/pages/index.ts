import type { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
	slug: "pages",
	labels: {
		singular: "Page",
		plural: "Pages",
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
		{
			name: "content",
			label: "Content",
			type: "richText",
			required: true,
		},
		{
			name: "site",
			label: "Site",
			type: "relationship",
			relationTo: "sites",
			required: true,
			// If user is not admin, set the site by default
			// to the first site that they have access to
			// defaultValue: ({ user }) => {
			//   if (!user.roles.includes('admin') && user.sites?.[0]) {
			//     return user.sites[0];
			//   }
			// }
		},
	],
};

export default Pages;
