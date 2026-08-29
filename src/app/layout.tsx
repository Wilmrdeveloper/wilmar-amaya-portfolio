import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-barlow",
});

export const metadata: Metadata = {
    title: "Wilmar Amaya · Desarrollador de Software Full Stack",
    description: "Portafolio profesional de Wilmar Amaya",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="dark" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${barlowCondensed.variable} ${inter.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}