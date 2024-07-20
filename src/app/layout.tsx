import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
    title: "Marketplace",
    description: "A marketplace capstone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Marketplace</title>
				<meta name="description" content={metadata.description} />
                <link rel="icon" href="/marketplace_logo.png" />
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}