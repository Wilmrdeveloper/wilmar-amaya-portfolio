"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/providers";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PERSONAL } from "@/lib/constants";
import SpecularButton from "@/components/ui/SpecularButton";

export function Contact() {
    const t = useTranslations("Contact");
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    const links = [
        {
            label: t("email"),
            value: PERSONAL.email,
            href: `mailto:${PERSONAL.email}`,
            icon: <Mail className="h-4 w-4" />,
        },
        {
            label: t("whatsapp"),
            value: PERSONAL.phone,
            href: PERSONAL.whatsapp,
            icon: <MessageCircle className="h-4 w-4" />,
        },
        {
            label: t("linkedin"),
            value: "linkedin.com/in/willamaya",
            href: PERSONAL.linkedin,
            icon: <FaLinkedin className="h-4 w-4" />,
        },
        {
            label: t("github"),
            value: "github.com/Wilmrdeveloper",
            href: PERSONAL.github,
            icon: <FaGithub className="h-4 w-4" />,
        },
    ];

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            await new Promise((resolve) => setTimeout(resolve, 900));
            console.log({
                name: data.get("name"),
                email: data.get("email"),
                company: data.get("company"),
                message: data.get("message"),
            });
            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <section
            id="contact"
            className={`relative py-28 md:py-36 overflow-hidden ${isDark ? "bg-[#050505]" : "bg-white"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14 md:mb-16 max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`text-xs font-medium uppercase tracking-[0.25em] mb-4 font-[family-name:var(--font-barlow)] ${isDark ? "text-neutral-500" : "text-neutral-400"
                            }`}
                    >
                        {t("label")}
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={`text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-barlow)] ${isDark ? "text-white" : "text-neutral-900"
                            }`}
                    >
                        {t("title")}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={`mt-5 text-base md:text-lg font-light leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"
                            }`}
                    >
                        {t("subtitle")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        {links.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors ${isDark
                                    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                                    : "border-black/5 bg-neutral-50 hover:bg-neutral-100"
                                    }`}
                            >
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${isDark
                                        ? "bg-white/5 text-neutral-300"
                                        : "bg-white text-neutral-700"
                                        }`}
                                >
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <p
                                        className={`text-xs uppercase tracking-widest mb-1 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                            }`}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        className={`text-sm font-medium truncate ${isDark ? "text-white" : "text-neutral-900"
                                            }`}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="lg:col-span-7"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className={`rounded-3xl border p-6 md:p-8 space-y-5 ${isDark
                                ? "border-white/10 bg-white/[0.03]"
                                : "border-black/5 bg-neutral-50"
                                }`}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                            }`}
                                    >
                                        {t("formName")}
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${isDark
                                            ? "border-white/10 bg-black/40 text-white placeholder:text-neutral-600 focus:border-white/25"
                                            : "border-black/10 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-black/25"
                                            }`}
                                        placeholder={t("placeholderName")}
                                    />
                                </div>

                                <div>
                                    <label
                                        className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                            }`}
                                    >
                                        {t("formEmail")}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${isDark
                                            ? "border-white/10 bg-black/40 text-white placeholder:text-neutral-600 focus:border-white/25"
                                            : "border-black/10 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-black/25"
                                            }`}
                                        placeholder={t("placeholderEmail")}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                        }`}
                                >
                                    {t("formCompany")}
                                </label>
                                <input
                                    name="company"
                                    required
                                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${isDark
                                        ? "border-white/10 bg-black/40 text-white placeholder:text-neutral-600 focus:border-white/25"
                                        : "border-black/10 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-black/25"
                                        }`}
                                    placeholder={t("placeholderCompany")}
                                />
                            </div>

                            <div>
                                <label
                                    className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? "text-neutral-500" : "text-neutral-400"
                                        }`}
                                >
                                    {t("formMessage")}
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none resize-none transition-colors ${isDark
                                        ? "border-white/10 bg-black/40 text-white placeholder:text-neutral-600 focus:border-white/25"
                                        : "border-black/10 bg-white text-neutral-900 placeholder:text-neutral-400 focus:border-black/25"
                                        }`}
                                    placeholder={t("placeholderMessage")}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                                <SpecularButton
                                    type="submit"
                                    size="md"
                                    radius={14}
                                    tint={isDark ? "#ffffff" : "#000000"}
                                    tintOpacity={0.06}
                                    blur={10}
                                    textColor={isDark ? "#f5f5f5" : "#171717"}
                                    lineColor={isDark ? "#ffffff" : "#171717"}
                                    baseColor={isDark ? "#525252" : "#a3a3a3"}
                                    intensity={1}
                                    thickness={1}
                                    followMouse
                                    disabled={status === "sending"}
                                    className="font-[family-name:var(--font-barlow)] tracking-[0.12em] uppercase"
                                >
                                    {status === "sending" ? t("sending") : t("formSubmit")}
                                </SpecularButton>

                                {status === "sent" && (
                                    <p
                                        className={`text-sm ${isDark ? "text-neutral-300" : "text-neutral-600"
                                            }`}
                                    >
                                        {t("sent")}
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="text-sm text-red-400">
                                        {t("error")}
                                    </p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}