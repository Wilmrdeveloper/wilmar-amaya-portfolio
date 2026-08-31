/*
 * Project & Portfolio Wilmar Amaya Code - All rights reserved.
 */

"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TiltedCard from "@/components/ui/TiltedCard";

export function About() {
    const t = useTranslations("About");
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <section
            id="about"
            className={`relative pt-12 md:pt-16 pb-28 md:pb-36 overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex justify-center lg:justify-start"
                    >
                        <TiltedCard
                            imageSrc="/images/profile.jpeg"
                            altText="Wilmar Amaya"
                            captionText="Wilmar Amaya"
                            containerHeight="360px"
                            containerWidth="300px"
                            imageHeight="340px"
                            imageWidth="280px"
                            rotateAmplitude={11}
                            scaleOnHover={1.04}
                            showMobileWarning={false}
                            showTooltip={true}
                        />
                    </motion.div>

                    <div className="lg:col-span-7 space-y-7">
                        <div>
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
                                className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-neutral-900"
                                    }`}
                            >
                                {t("title")}
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className={`text-lg md:text-xl font-light leading-relaxed ${isDark ? "text-neutral-300" : "text-neutral-700"
                                }`}
                        >
                            {t("paragraph1")}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className={`text-base md:text-lg font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                                }`}
                        >
                            {t("paragraph2")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                        >
                            {[
                                { label: t("locationLabel"), value: t("locationValue") },
                                { label: t("experienceLabel"), value: t("experienceValue") },
                                { label: t("focusLabel"), value: t("focusValue") },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-2xl border p-4 ${isDark
                                        ? "border-white/10 bg-white/[0.03]"
                                        : "border-black/5 bg-neutral-50"
                                        }`}
                                >
                                    <p
                                        className={`text-xs uppercase tracking-widest mb-1.5 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                            }`}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        className={`text-sm font-medium ${isDark ? "text-white" : "text-neutral-900"
                                            }`}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
