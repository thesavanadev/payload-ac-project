import Link from "next/link";

import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout-container";

const HomePage = () => {
	return (
		<LayoutContainer>
			<article>
				<section className="pb-36 pt-36">
					<h1 className="text-4xl font-bold tracking-wide text-sky-800">
						Payload Access Control
					</h1>

					<p className="py-5">
						Access Control is one of Payload's most important features—it's way more
						powerful than a typical RBAC pattern, which is often inflexible when it comes
						to document-based or even field-based permissions. With Payload's access
						control, you can build incredibly powerful and secure apps.
					</p>

					<p className="py-3">
						Payload's admin UI automatically responds to the access control that you
						define. For example, if a user can't edit a document, the "Publish" button
						will be automatically removed. If a user can't edit a field, the field is
						automatically set to read-only in the admin UI. If a user can't create new
						documents in a collection, the "Create New" function will be disabled
						throughout all of the admin UI.
					</p>

					<p className="py-3">
						**The best part is that it's all done in clean, declarative, easy-to-read
						code.**
					</p>

					<Button asChild className="mt-5">
						<Link href="/admin">Admin Area</Link>
					</Button>
				</section>
			</article>
		</LayoutContainer>
	);
};

export default HomePage;
