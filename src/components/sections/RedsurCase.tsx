"use client";

import { useLocale } from "next-intl";
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
                        Volver a proyectos
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
                        Caso de estudio
                    </p>
                    <h1
                        className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-neutral-900"
                            }`}
                    >
                        RedSur Data Governance Portal
                    </h1>
                    <p
                        className={`text-lg font-light leading-relaxed max-w-2xl ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        Portal de gobierno de datos que demuestra el ciclo completo del
                        dato: desde fuentes oficiales sucias hasta decisiones de negocio
                        confiables, con arquitectura medallón, RBAC y despliegue en
                        producción.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="https://redsur-data-governance-portal.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] ${isDark ? "bg-white text-black" : "bg-neutral-900 text-white"
                                }`}
                        >
                            Ver en vivo
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
                                caption: "Antes · Datos crudos del DANE",
                            },
                            {
                                image: "/images/redsur-after.png",
                                caption: "Después · Dashboard interactivo",
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
                <Section title="El problema" isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        RedSur Distribuciones S.A.S. es una empresa ficticia de consumo
                        masivo en crecimiento regional. El problema es real: datos
                        dispersos, sin control de acceso, sin trazabilidad y sin una fuente
                        única de verdad. Cada área con su propio Excel.
                    </p>
                    <p className={`${bodyClass(isDark)} mt-4`}>
                        El punto de partida fueron datos reales de la Encuesta Anual de
                        Comercio 2023 del DANE: CSV con separador decimal colombiano,
                        columnas técnicas sin contexto, códigos de departamento no
                        oficiales y valores en miles de pesos sin aclaración. 14.837
                        registros, 10 departamentos, 9 sectores y más de 545 billones de
                        pesos en ventas analizadas.
                    </p>
                </Section>

                {/* Architecture */}
                <Section title="Arquitectura" isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        Arquitectura medallón de tres capas, estándar en ingeniería de
                        datos moderna:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        {[
                            {
                                icon: <Database className="h-5 w-5" />,
                                title: "Raw",
                                desc: "Datos del DANE sin modificar en PostgreSQL. Regla de gobierno: no tocar el origen.",
                            },
                            {
                                icon: <Layers className="h-5 w-5" />,
                                title: "Staging",
                                desc: "dbt Core limpia, renombra, traduce códigos y calcula campos derivados.",
                            },
                            {
                                icon: <BarChart3 className="h-5 w-5" />,
                                title: "Marts",
                                desc: "Tablas de negocio: ventas por departamento, sector, personal por región.",
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
                <Section title="El portal y el gobierno" isDark={isDark}>
                    <p className={bodyClass(isDark)}>
                        Autenticación real con JWT y contraseñas bcrypt. Roles Admin,
                        Editor y Viewer. El acceso a dashboards no es libre: el usuario
                        solicita acceso, el admin aprueba o rechaza, y solo entonces recibe
                        credenciales. Si se revoca el acceso, el workspace desaparece de su
                        vista. RBAC aplicado de forma tangible.
                    </p>
                </Section>

                {/* Challenges */}
                <Section title="Desafíos reales" isDark={isDark}>
                    <ul
                        className={`space-y-4 text-sm md:text-base leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                Dashboards sin Metabase:
                            </strong>{" "}
                            el plan gratuito de Render no alcanza para Metabase. Se
                            reconstruyeron en React + Recharts con datos de Supabase.
                        </li>
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                Correo en producción:
                            </strong>{" "}
                            SMTP bloqueado en Render free. Solución con Resend (API de
                            correo).
                        </li>
                        <li>
                            <strong className={isDark ? "text-white" : "text-neutral-900"}>
                                Migración a Supabase:
                            </strong>{" "}
                            backup de más de un millón de caracteres. Migración por pipeline
                            desde Docker, sin pasar por el editor SQL.
                        </li>
                    </ul>
                </Section>

                {/* Stack */}
                <Section title="Stack" isDark={isDark}>
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
                <Section title="Qué demuestra" isDark={isDark}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                icon: <Server className="h-5 w-5" />,
                                title: "Problema de negocio primero",
                                desc: "No es un ejercicio de código: es un caso de uso con solución coherente.",
                            },
                            {
                                icon: <Database className="h-5 w-5" />,
                                title: "Datos reales y sucios",
                                desc: "Saber limpiar e interpretar fuentes oficiales, no solo datasets de ejemplo.",
                            },
                            {
                                icon: <Shield className="h-5 w-5" />,
                                title: "Arquitectura completa",
                                desc: "Pipeline, base de datos, backend seguro y sistema de acceso.",
                            },
                            {
                                icon: <GitBranch className="h-5 w-5" />,
                                title: "Producción con límites",
                                desc: "Despliegue gratuito coordinando varios servicios y resolviendo restricciones reales.",
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
                        Abrir portal en vivo
                        <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                        href={`/${locale}#contact`}
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border ${isDark
                                ? "border-white/15 text-white hover:bg-white/5"
                                : "border-black/10 text-neutral-900 hover:bg-black/5"
                            }`}
                    >
                        Contactar
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