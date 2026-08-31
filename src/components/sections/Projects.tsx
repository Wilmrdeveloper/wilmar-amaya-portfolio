"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import {
    ExternalLink,
    ArrowRight,
    Database,
    Shield,
    GitBranch,
    BarChart3,
} from "lucide-react";
import Link from "next/link";
import MorphSlider from "@/components/ui/MorphSlider";
import SpotlightCard from "@/components/ui/SpotlightCard";

export function Projects() {
    const t = useTranslations("Projects");
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const locale = useLocale();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <section
            id="projects"
            className={`relative py-28 md:py-36 overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`text-xs font-medium uppercase tracking-[0.25em] mb-4 ${isDark ? "text-neutral-500" : "text-neutral-400"
                            }`}
                    >
                        {t("subtitle")}
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={`text-3xl md:text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-neutral-900"
                            }`}
                    >
                        {t("title")}
                    </motion.h2>
                </div>

                {/* Project Card principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <SpotlightCard
                        className={`rounded-3xl border overflow-hidden ${isDark
                            ? "border-white/10 bg-white/[0.03]"
                            : "border-black/5 bg-neutral-50"
                            }`}
                    >
                        {/* Top bar */}
                        <div
                            className={`px-6 md:px-10 py-5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isDark ? "border-white/10" : "border-black/5"
                                }`}
                        >
                            <div>
                                <h3
                                    className={`text-xl md:text-2xl font-semibold tracking-tight ${isDark ? "text-white" : "text-neutral-900"
                                        }`}
                                >
                                    {t("redsurTitle")}
                                </h3>
                                <p
                                    className={`text-sm mt-1 ${isDark ? "text-neutral-400" : "text-neutral-500"
                                        }`}
                                >
                                    {t("redsurSubtitle")}
                                </p>
                            </div>

                            <a
                                href="https://redsur-data-governance-portal.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] active:scale-95 ${isDark
                                    ? "bg-white text-black"
                                    : "bg-neutral-900 text-white"
                                    }`}
                            >
                                {t("liveProject")}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-10 space-y-12">
                            {/* Pitch */}
                            <div className="max-w-3xl">
                                <p
                                    className={`text-lg md:text-xl font-light leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"
                                        }`}
                                >
                                    {t("pitch")}
                                </p>
                            </div>

                            {/* Before / After */}
                            <div className="space-y-8">
                                <h4
                                    className={`text-sm font-medium uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"
                                        }`}
                                >
                                    {t("beforeAfter")}
                                </h4>

                                <div className="relative w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden border border-white/5">
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
                                        loop={true}
                                        radius={16}
                                        overlayColor="#050505"
                                        showCaptions={true}
                                        showControls={true}
                                        showIndicators={true}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Antes */}
                                    <SpotlightCard
                                        className={`rounded-2xl border p-6 ${isDark
                                            ? "border-white/10 bg-black/40"
                                            : "border-black/5 bg-white"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span
                                                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${isDark
                                                    ? "bg-white/10 text-neutral-300"
                                                    : "bg-neutral-100 text-neutral-600"
                                                    }`}
                                            >
                                                01
                                            </span>
                                            <p
                                                className={`text-xs uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"
                                                    }`}
                                            >
                                                {t("beforeAfter").split("→")[0].trim()}
                                            </p>
                                        </div>

                                        <p
                                            className={`text-base font-medium mb-3 ${isDark ? "text-white" : "text-neutral-900"
                                                }`}
                                        >
                                            {t("beforeTitle")}
                                        </p>

                                        <ul
                                            className={`space-y-2 text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"
                                                }`}
                                        >
                                            <li>• {t("beforeItem1")}</li>
                                            <li>• {t("beforeItem2")}</li>
                                            <li>• {t("beforeItem3")}</li>
                                            <li>• {t("beforeItem4")}</li>
                                            <li>• {t("beforeItem5")}</li>
                                        </ul>
                                    </SpotlightCard>

                                    {/* Después */}
                                    <SpotlightCard
                                        className={`rounded-2xl border p-6 ${isDark
                                            ? "border-white/10 bg-white/[0.04]"
                                            : "border-black/5 bg-neutral-100"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span
                                                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${isDark
                                                    ? "bg-white text-black"
                                                    : "bg-neutral-900 text-white"
                                                    }`}
                                            >
                                                02
                                            </span>
                                            <p
                                                className={`text-xs uppercase tracking-widest ${isDark ? "text-neutral-500" : "text-neutral-400"
                                                    }`}
                                            >
                                                {t("beforeAfter").split("→")[1]?.trim() || "After"}
                                            </p>
                                        </div>

                                        <p
                                            className={`text-base font-medium mb-3 ${isDark ? "text-white" : "text-neutral-900"
                                                }`}
                                        >
                                            {t("afterTitle")}
                                        </p>

                                        <ul
                                            className={`space-y-2 text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"
                                                }`}
                                        >
                                            <li>• {t("afterItem1")}</li>
                                            <li>• {t("afterItem2")}</li>
                                            <li>• {t("afterItem3")}</li>
                                            <li>• {t("afterItem4")}</li>
                                            <li>• {t("afterItem5")}</li>
                                        </ul>
                                    </SpotlightCard>
                                </div>

                                <p
                                    className={`text-sm max-w-2xl ${isDark ? "text-neutral-500" : "text-neutral-500"
                                        }`}
                                >
                                    {t("transitionText")}
                                </p>
                            </div>

                            {/* Key points */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {[
                                    {
                                        icon: <Database className="h-5 w-5" />,
                                        title: t("archTitle"),
                                        desc: t("archDesc"),
                                    },
                                    {
                                        icon: <Shield className="h-5 w-5" />,
                                        title: t("govTitle"),
                                        desc: t("govDesc"),
                                    },
                                    {
                                        icon: <BarChart3 className="h-5 w-5" />,
                                        title: t("dashTitle"),
                                        desc: t("dashDesc"),
                                    },
                                    {
                                        icon: <GitBranch className="h-5 w-5" />,
                                        title: t("traceTitle"),
                                        desc: t("traceDesc"),
                                    },
                                ].map((item, i) => (
                                    <SpotlightCard
                                        key={i}
                                        className={`rounded-2xl border p-5 ${isDark
                                            ? "border-white/10 bg-white/[0.03]"
                                            : "border-black/5 bg-white"
                                            }`}
                                    >
                                        <div
                                            className={`mb-4 inline-flex p-2.5 rounded-xl ${isDark
                                                ? "bg-white/5 text-neutral-300"
                                                : "bg-neutral-100 text-neutral-700"
                                                }`}
                                        >
                                            {item.icon}
                                        </div>
                                        <h5
                                            className={`text-sm font-semibold mb-1.5 ${isDark ? "text-white" : "text-neutral-900"
                                                }`}
                                        >
                                            {item.title}
                                        </h5>
                                        <p
                                            className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                                                }`}
                                        >
                                            {item.desc}
                                        </p>
                                    </SpotlightCard>
                                ))}
                            </div>

                            {/* Stack + CTA */}
                            <div
                                className={`pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${isDark ? "border-white/10" : "border-black/5"
                                    }`}
                            >
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

                                <Link
                                    href={`/${locale}/projects/redsur`}
                                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isDark
                                        ? "text-neutral-300 hover:text-white"
                                        : "text-neutral-600 hover:text-neutral-900"
                                        }`}
                                >
                                    {t("viewFullCase")}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
}