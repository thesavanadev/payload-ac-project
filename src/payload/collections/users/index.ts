import { isAdmin, isAdminFieldLevel } from "@/payload-access/isAdmin";
import { isAdminOrSelf } from "@/payload-access/isAdminOrSelf";

import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "User",
		plural: "Users",
	},
	admin: {
		defaultColumns: ["firstName", "lastName", "email", "roles"],
		useAsTitle: "email",
	},
	access: {
		// only admins can create users
		create: isAdmin,
		// admins can read all, but any other signed in user can only read their own data
		read: isAdminOrSelf,
		// admins can update all, but any other signed in user can only update their own data
		update: isAdminOrSelf,
		// Only admins can delete
		delete: isAdmin,
	},
	auth: {
		// this property controls how deeply "populated"
		// relationship docs are that are stored in the req.user.
		// it should be kept to as low as possible, which
		// keeps performance fast.
		depth: 0,
	},
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
				create: isAdminFieldLevel,
				update: isAdminFieldLevel,
			},
			admin: {
				description: "This field sets which roles that this user has access to.",
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
				create: isAdminFieldLevel,
				update: isAdminFieldLevel,
			},
			admin: {
				condition: ({ roles }) => roles && !roles.includes("admin"),
				description: "This field sets which sites that this user has access to.",
			},
		},
	],
};

export default Users;
