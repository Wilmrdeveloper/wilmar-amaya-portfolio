/*
 * Project & Portfolio Wilmar Amaya Code - All rights reserved.
 */

"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoLoop from "@/components/ui/LogoLoop";
import {
    SiPython,
    SiJavascript,
    SiMysql,
    SiMongodb,
    SiGit,
} from "react-icons/si";
import { FaDatabase, FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

export function Skills() {
    const t = useTranslations("Skills");
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    const techLogos = [
        { node: <SiPython />, title: "Python", href: "https://www.python.org" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <FaCode />, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { node: <FaDatabase />, title: "DAX", href: "https://learn.microsoft.com/en-us/dax/" },
        { node: <FaServer />, title: "Databricks", href: "https://www.databricks.com" },
        { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
        { node: <FaLaptopCode />, title: "Frontend", href: "#" },
        { node: <FaServer />, title: "Backend", href: "#" },
    ];

    return (
        <section
            id="skills"
            className={`relative py-28 md:py-36 overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
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

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={`mt-5 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        {t("description")}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="relative"
                    style={{ height: "120px" }}
                >
                    {mounted && (
                        <LogoLoop
                            logos={techLogos}
                            speed={80}
                            direction="left"
                            logoHeight={48}
                            gap={56}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor={isDark ? "#050505" : "#ffffff"}
                            ariaLabel="Tecnologías"
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
