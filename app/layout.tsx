import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
	title: "Alatau City",
	description: "Alatau City - special economic zone",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={montserrat.className}>
				<Header />
				<main className="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
