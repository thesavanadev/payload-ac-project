import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "User",
		plural: "Users",
	},
	admin: {
		defaultColumns: ["email", "createdAt"],
		useAsTitle: "email",
	},
	access: {},
	auth: true,
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "firstName",
					label: "First Name",
					type: "text",
					required: true,
					admin: {
						width: "50%",
					},
				},
				{
					name: "lastName",
					label: "Last Name",
					type: "text",
					required: true,
					admin: {
						width: "50%",
					},
				},
			],
		},
		{
			name: "roles",
			label: "Roles",
			// save the roles field to JWT so we can use from `req.user`
			saveToJWT: true,
			type: "select",
			hasMany: true,
			defaultValue: ["editor"],
			access: {
				// only admins can create or update a value for this field
			},
			options: [
				{
					label: "Admin",
					value: "admin",
				},
				{
					label: "Editor",
					value: "editor",
				},
			],
		},
		{
			name: "sites",
			label: "Sites",
			// save the sites field to JWT so we can use from `req.user`
			saveToJWT: true,
			type: "relationship",
			relationTo: "sites",
			hasMany: true,
			access: {
				// only admins can create or update a value for this field
			},
			admin: {
				condition: ({ roles }) => roles && !roles.includes("admin"),
				description: "This field sets which sites that this user has access to.",
			},
		},
	],
};

export default Users;
