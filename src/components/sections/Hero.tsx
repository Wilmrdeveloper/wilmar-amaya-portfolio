"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PERSONAL } from "@/lib/constants";
import { TextMorph } from "@/components/ui/TextMorph";
import WarpText from "@/components/ui/WarpText";
import LineWaves from "@/components/three/LineWaves";
import SpecularButton from "@/components/ui/SpecularButton";

export function Hero() {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    const lineWavesProps = isDark
        ? {
            speed: 0.7,
            innerLineCount: 8,
            outerLineCount: 31,
            warpIntensity: 0.7,
            rotation: 45,
            edgeFadeWidth: 0,
            colorCycleSpeed: 1.9,
            brightness: 0.1,
            color1: "#f16262",
            color2: "#9af1ff",
            color3: "#0008ff",
            mouseInfluence: 2,
        }
        : {
            // Misma estética, un poco más visible sobre fondo blanco
            speed: 0.7,
            innerLineCount: 8,
            outerLineCount: 31,
            warpIntensity: 0.7,
            rotation: 45,
            edgeFadeWidth: 0,
            colorCycleSpeed: 1.9,
            brightness: 0.14,
            color1: "#f16262",
            color2: "#9af1ff",
            color3: "#0008ff",
            mouseInfluence: 2,
        };

    // Si quieres solo grises también en light mode:
    // light: color1/2/3 en grises y brightness ~0.22

    return (
        <section
            className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            {/* Fondo LineWaves */}
            <div className="absolute inset-0 z-0">
                {mounted && (
                    <LineWaves
                        key={isDark ? "dark-waves" : "light-waves"}
                        speed={lineWavesProps.speed}
                        innerLineCount={lineWavesProps.innerLineCount}
                        outerLineCount={lineWavesProps.outerLineCount}
                        warpIntensity={lineWavesProps.warpIntensity}
                        rotation={lineWavesProps.rotation}
                        edgeFadeWidth={lineWavesProps.edgeFadeWidth}
                        colorCycleSpeed={lineWavesProps.colorCycleSpeed}
                        brightness={lineWavesProps.brightness}
                        color1={lineWavesProps.color1}
                        color2={lineWavesProps.color2}
                        color3={lineWavesProps.color3}
                        enableMouseInteraction
                        mouseInfluence={lineWavesProps.mouseInfluence}
                    />
                )}
            </div>

            {/* Overlay legibilidad */}
            <div
                className={`absolute inset-0 z-[1] pointer-events-none ${isDark
                        ? "bg-gradient-to-b from-black/60 via-black/30 to-black/70"
                        : "bg-gradient-to-b from-white/70 via-white/40 to-white/80"
                    }`}
            />

            {/* Contenido */}
            <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`mb-8 border backdrop-blur-md ${isDark
                            ? "border-white/15 bg-white/5"
                            : "border-black/10 bg-white/50"
                        }`}
                >
                    <span
                        className={`inline-block px-5 py-2 font-[family-name:var(--font-barlow)] text-xs font-medium uppercase ${isDark ? "text-neutral-300" : "text-neutral-600"
                            }`}
                    >
                        {t("badge")}
                    </span>
                </motion.div>

                {/* Título WarpText */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl font-[family-name:var(--font-barlow)]"
                >
                    <WarpText
                        text={t("title")}
                        color={isDark ? "#f5f5f5" : "rgba(20,20,20,0.85)"}
                        warpStrength={0.07}
                        warpScale={1.6}
                        speed={0.5}
                        pointerInfluence={0.4}
                        pointerStrength={0.35}
                        refraction={0.016}
                        ripple
                        fontSize="clamp(2.8rem, 8vw, 6.5rem)"
                        fontWeight={700}
                        fontFamily="var(--font-barlow), sans-serif"
                        letterSpacing={0}
                        lineHeight={0.95}
                        style={{ height: "160px", minHeight: "140px" }}
                    />
                </motion.div>

                {/* TextMorph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mt-5 font-[family-name:var(--font-barlow)]"
                >
                    <TextMorph
                        words={
                            locale === "es"
                                ? [
                                    "Desarrollador Full Stack",
                                    "Analista de Datos",
                                    "Desarrollador de Software",
                                    "Solucionador de Problemas",
                                ]
                                : [
                                    "Full Stack Developer",
                                    "Data Analyst",
                                    "Software Developer",
                                    "Problem Solver",
                                ]
                        }
                        duration={2.8}
                    />
                </motion.div>

                {/* Descripción */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`mt-6 max-w-2xl text-base md:text-lg font-light leading-relaxed font-[family-name:var(--font-barlow)] ${isDark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                >
                    {t("description")}
                </motion.p>

                {/* Botones Specular */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <Link href={`/${locale}#projects`}>
                        <SpecularButton
                            size="lg"
                            radius={14}
                            tint={isDark ? "#ffffff" : "#000000"}
                            tintOpacity={0.06}
                            blur={12}
                            textColor={isDark ? "#f5f5f5" : "#171717"}
                            lineColor={isDark ? "#ffffff" : "#171717"}
                            baseColor={isDark ? "#525252" : "#a3a3a3"}
                            intensity={1.1}
                            thickness={1}
                            followMouse
                            className="font-[family-name:var(--font-barlow)] tracking-[0.12em] uppercase"
                        >
                            {t("ctaPrimary")}
                        </SpecularButton>
                    </Link>

                    <a href={PERSONAL.cvPath} download>
                        <SpecularButton
                            size="lg"
                            radius={14}
                            tint={isDark ? "#ffffff" : "#000000"}
                            tintOpacity={0.04}
                            blur={12}
                            textColor={isDark ? "#e5e5e5" : "#404040"}
                            lineColor={isDark ? "#a3a3a3" : "#737373"}
                            baseColor={isDark ? "#404040" : "#d4d4d4"}
                            intensity={0.9}
                            thickness={1}
                            followMouse
                            className="font-[family-name:var(--font-barlow)] tracking-[0.12em] uppercase"
                        >
                            CV
                        </SpecularButton>
                    </a>
                </motion.div>
            </div>

            {/* Gradiente inferior */}
            <div
                className={`absolute bottom-0 left-0 h-32 w-full z-10 pointer-events-none ${isDark
                        ? "bg-gradient-to-t from-[#050505] to-transparent"
                        : "bg-gradient-to-t from-white to-transparent"
                    }`}
            />
        </section>
    );
}