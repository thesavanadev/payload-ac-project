import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";

import "@/frontend/global.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Payload Access Control",
	description: "An exploration of the powerful access control measures built into Payload.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body className={cn("flex h-screen flex-col font-sans antialiased", fontSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<header></header>

					<main>{children}</main>

					<footer className="mt-auto"></footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
