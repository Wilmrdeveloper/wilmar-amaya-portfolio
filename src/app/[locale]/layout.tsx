/*
 * Project & Portfolio Wilmar Amaya Code - All rights reserved.
 */

import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <Providers locale={locale} messages={messages}>
            <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#050505] dark:text-white transition-colors duration-300">
                <Navbar />
                <main>{children}</main>
            </div>
        </Providers>
    );
}
