import type { Access } from "payload";
import type { User } from "@/payload-types";

export const isSignedIn: Access<User> = ({ req: { user } }) => {
	// return true if user is signed in, false if not
	return Boolean(user);
};
