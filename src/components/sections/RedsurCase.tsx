"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Database,
    Shield,
    GitBranch,
    BarChart3,
    Server,
    Layers,
} from "lucide-react";
import MorphSlider from "@/components/ui/MorphSlider";
import SpotlightCard from "@/components/ui/SpotlightCard";

export function RedsurCase() {
    const t = useTranslations("RedsurCase");
    const locale = useLocale();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <div
            className={`min-h-screen pt-28 pb-24 ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            <div className="max-w-4xl mx-auto px-6">
                {/* Back */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href={`/${locale}#projects`}
                        className={`inline-flex items-center gap-2 text-sm mb-10 transition-colors ${isDark
                            ? "text-neutral-400 hover:text-white"
                            : "text-neutral-500 hover:text-neutral-900"
                            }`}
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t("back")}
                    </a>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="mb-12"
                >
                    <p
                        className={`text-xs uppercase tracking-[0.25em] mb-4 ${isDark ? "text-neutral-500" : "text-neutral-400"
                            }`}
                    >
                        {t("caseStudy")}
                    </p>
                    <h1
                        className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-neutral-900"
                            }`}
                    >
                        {t("title")}
                    </h1>
                    <p
                        className={`text-lg font-light leading-relaxed max-w-2xl ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        {t("subtitle")}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="https://redsur-data-governance-portal.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] ${isDark ? "bg-white text-black" : "bg-neutral-900 text-white"
                                }`}
                        >
                            {t("live")}
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Morph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16 relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-white/5"
                >
                    <MorphSlider
                        items={[
                            {
                                image: "/images/redsur-before.png",
                                caption: t("beforeCaption"),
                            },
                            {
                                image: "/images/redsur-after.png",
                                caption: t("afterCaption"),
                            },
                        ]}
                        transition="melt"
                        duration={1.2}
                        intensity={0.55}
                        scale={2.4}
                        aberration={0.3}
                        drift={0.35}
                        autoplay={false}
                        loop
                        radius={16}
                        overlayColor="#050505"
                        showCaptions
                        showControls
                        showIndicators
                    />
                </motion.div>

                {/* Problem */}
                <Section title={t("problemTitle")} isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        {t("problemP1")}
                    </p>
                    <p className={`${bodyClass(isDark)} mt-4`}>
                        {t("problemP2")}
                    </p>
                </Section>

                {/* Architecture */}
                <Section title={t("architectureTitle")} isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        {t("architectureIntro")}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        {[
                            {
                                icon: <Database className="h-5 w-5" />,
                                title: t("rawTitle"),
                                desc: t("rawDesc"),
                            },
                            {
                                icon: <Layers className="h-5 w-5" />,
                                title: t("stagingTitle"),
                                desc: t("stagingDesc"),
                            },
                            {
                                icon: <BarChart3 className="h-5 w-5" />,
                                title: t("martsTitle"),
                                desc: t("martsDesc"),
                            },
                        ].map((item) => (
                            <SpotlightCard
                                key={item.title}
                                className={`rounded-2xl border p-5 ${isDark
                                    ? "border-white/10 bg-white/[0.03]"
                                    : "border-black/5 bg-neutral-50"
                                    }`}
                            >
                                <div
                                    className={`mb-3 inline-flex p-2 rounded-xl ${isDark
                                        ? "bg-white/5 text-neutral-300"
                                        : "bg-neutral-100 text-neutral-700"
                                        }`}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    className={`text-sm font-semibold mb-1 ${isDark ? "text-white" : "text-neutral-900"
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                                        }`}
                                >
                                    {item.desc}
                                </p>
                            </SpotlightCard>
                        ))}
                    </div>
                </Section>

                {/* Portal */}
                <Section title={t("portalTitle")} isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        {t("portalP")}
                    </p>
                </Section>

                {/* Challenges */}
                <Section title={t("challengesTitle")} isDark={isDark}>
                    <ul
                        className={`space-y-4 text-sm md:text-base leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                {t("challenge1Title")}
                            </strong>{" "}
                            {t("challenge1Desc")}
                        </li>
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                {t("challenge2Title")}
                            </strong>{" "}
                            {t("challenge2Desc")}
                        </li>
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                {t("challenge3Title")}
                            </strong>{" "}
                            {t("challenge3Desc")}
                        </li>
                    </ul>
                </Section>

                {/* Stack */}
                <Section title={t("stackTitle")} isDark={isDark}>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "PostgreSQL",
                            "dbt Core",
                            "React",
                            "Node.js",
                            "Docker",
                            "Supabase",
                            "Render",
                            "Vercel",
                            "JWT",
                            "Recharts",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className={`text-xs px-3 py-1.5 rounded-full border ${isDark
                                    ? "border-white/10 text-neutral-400"
                                    : "border-black/10 text-neutral-600"
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </Section>

                {/* What it shows */}
                <Section title={t("showsTitle")} isDark={isDark}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <Server className="h-5 w-5" />,
                                title: t("show1Title"),
                                desc: t("show1Desc"),
                            },
                            {
                                icon: <Database className="h-5 w-5" />,
                                title: t("show2Title"),
                                desc: t("show2Desc"),
                            },
                            {
                                icon: <Shield className="h-5 w-5" />,
                                title: t("show3Title"),
                                desc: t("show3Desc"),
                            },
                            {
                                icon: <GitBranch className="h-5 w-5" />,
                                title: t("show4Title"),
                                desc: t("show4Desc"),
                            },
                        ].map((item) => (
                            <SpotlightCard
                                key={item.title}
                                className={`rounded-2xl border p-5 ${isDark
                                    ? "border-white/10 bg-white/[0.03]"
                                    : "border-black/5 bg-neutral-50"
                                    }`}
                            >
                                <div
                                    className={`mb-3 inline-flex p-2 rounded-xl ${isDark
                                        ? "bg-white/5 text-neutral-300"
                                        : "bg-neutral-100 text-neutral-700"
                                        }`}
                                >
                                    {item.icon}
                                </div>
                                <h3
                                    className={`text-sm font-semibold mb-1 ${isDark ? "text-white" : "text-neutral-900"
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                                        }`}
                                >
                                    {item.desc}
                                </p>
                            </SpotlightCard>
                        ))}
                    </div>
                </Section>

                {/* CTA */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                    <a
                        href="https://redsur-data-governance-portal.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${isDark ? "bg-white text-black" : "bg-neutral-900 text-white"
                            }`}
                    >
                        {t("openLive")}
                        <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                        href={`/${locale}#contact`}
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border ${isDark
                            ? "border-white/15 text-white hover:bg-white/5"
                            : "border-black/10 text-neutral-900 hover:bg-black/5"
                            }`}
                    >
                        {t("contact")}
                    </a>
                </div>
            </div>
        </div>
    );
}

function Section({
    title,
    children,
    isDark,
}: {
    title: string;
    children: React.ReactNode;
    isDark: boolean;
}) {
    return (
        <section className="mb-14">
            <h2
                className={`text-xl md:text-2xl font-semibold tracking-tight mb-4 ${isDark ? "text-white" : "text-neutral-900"
                    }`}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}

function bodyClass(isDark: boolean) {
    return `text-base font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
        }`;
}