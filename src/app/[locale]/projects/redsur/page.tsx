/*
 * Project & Portfolio Wilmar Amaya Code - All rights reserved.
 */

import { setRequestLocale } from "next-intl/server";
import { RedsurCase } from "@/components/sections/RedsurCase";

export default async function RedsurPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <RedsurCase />;
}
