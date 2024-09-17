import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import ThemeProvider from "@/providers/theme";

import type { Metadata } from "next";

import "@/frontend/global.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Payload Access Control",
	description:
		"An exploration of the powerful access control measures built into Payload.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("flex h-screen flex-col font-sans antialiased", fontSans.variable)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<header></header>

					<main>{children}</main>

					<footer className="mt-auto"></footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
