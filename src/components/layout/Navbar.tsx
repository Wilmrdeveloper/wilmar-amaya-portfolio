"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "@/components/providers";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { PERSONAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SpecularButton from "@/components/ui/SpecularButton";

export function Navbar() {
    const t = useTranslations("Nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú al cambiar de ruta / resize a desktop
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const switchLocale = () => {
        const newLocale = locale === "es" ? "en" : "es";
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    // Scroll suave sin provocar fetch de Next.js
    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
        isAnchor: boolean
    ) => {
        if (!isAnchor) return;

        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Actualiza la URL sin navegación de Next
            window.history.pushState(null, "", `/${locale}${href}`);
        }

        setMenuOpen(false);
    };

    const navItems = [
        { label: t("home"), href: `/${locale}`, isAnchor: false },
        { label: t("about"), href: "#about", isAnchor: true },
        { label: t("projects"), href: "#projects", isAnchor: true },
        { label: t("contact"), href: "#contact", isAnchor: true },
    ];

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed z-50 transition-all duration-500 ease-out",
                    scrolled || menuOpen
                        ? isDark
                            ? "top-0 left-0 right-0 py-3 border-none bg-black/40 backdrop-blur-3xl"
                            : "top-0 left-0 right-0 py-3 border-none bg-white/45 backdrop-blur-3xl"
                        : isDark
                            ? "top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-2xl"
                            : "top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl rounded-full border border-black/5 bg-white/25 px-5 py-3 backdrop-blur-2xl"
                )}
            >
                <div
                    className={cn(
                        "flex items-center justify-between",
                        scrolled || menuOpen ? "max-w-6xl mx-auto px-4 sm:px-6" : "w-full"
                    )}
                >
                    {/* Logo */}
                    <Link
                        href={`/${locale}`}
                        className="font-[family-name:var(--font-barlow)] text-lg font-semibold tracking-wide shrink-0"
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className={isDark ? "text-white" : "text-neutral-900"}>
                            Will
                        </span>
                    </Link>

                    {/* Links desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) =>
                            item.isAnchor ? (
                                <a
                                    key={item.href}
                                    href={`/${locale}${item.href}`}
                                    onClick={(e) => handleNavClick(e, item.href, true)}
                                    className={cn(
                                        "relative px-4 py-2 font-[family-name:var(--font-barlow)] text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200",
                                        isDark
                                            ? "text-neutral-400 hover:text-white"
                                            : "text-neutral-500 hover:text-neutral-900"
                                    )}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 font-[family-name:var(--font-barlow)] text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200",
                                        isDark
                                            ? "text-neutral-400 hover:text-white"
                                            : "text-neutral-500 hover:text-neutral-900"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <a href={PERSONAL.cvPath} download className="hidden sm:block">
                            <SpecularButton
                                size="sm"
                                radius={999}
                                tint={isDark ? "#ffffff" : "#000000"}
                                tintOpacity={isDark ? 0.08 : 0.06}
                                blur={8}
                                textColor={isDark ? "#f5f5f5" : "#171717"}
                                lineColor={isDark ? "#ffffff" : "#171717"}
                                baseColor={isDark ? "#525252" : "#a3a3a3"}
                                intensity={1}
                                thickness={1}
                                followMouse
                                className="font-[family-name:var(--font-barlow)] text-[11px] tracking-[0.18em] uppercase"
                            >
                                {t("downloadCV")}
                            </SpecularButton>
                        </a>

                        <button
                            onClick={switchLocale}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                            )}
                            aria-label="Cambiar idioma"
                        >
                            <Languages
                                className={cn(
                                    "h-4 w-4",
                                    isDark ? "text-neutral-300" : "text-neutral-700"
                                )}
                            />
                        </button>

                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                            )}
                            aria-label="Cambiar tema"
                        >
                            {isDark ? (
                                <Sun className="h-4 w-4 text-neutral-300" />
                            ) : (
                                <Moon className="h-4 w-4 text-neutral-700" />
                            )}
                        </button>

                        {/* Hamburguesa - solo móvil */}
                        <button
                            onClick={() => setMenuOpen((v) => !v)}
                            className={cn(
                                "md:hidden p-2 rounded-full transition-colors",
                                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                            )}
                            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? (
                                <X
                                    className={cn(
                                        "h-5 w-5",
                                        isDark ? "text-neutral-200" : "text-neutral-800"
                                    )}
                                />
                            ) : (
                                <Menu
                                    className={cn(
                                        "h-5 w-5",
                                        isDark ? "text-neutral-200" : "text-neutral-800"
                                    )}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Menú móvil */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={cn(
                            "fixed inset-0 z-40 md:hidden",
                            isDark
                                ? "bg-black/80 backdrop-blur-2xl"
                                : "bg-white/85 backdrop-blur-2xl"
                        )}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="flex h-full flex-col items-center justify-center gap-8 px-6"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                                    >
                                        {item.isAnchor ? (
                                            <a
                                                href={`/${locale}${item.href}`}
                                                onClick={(e) =>
                                                    handleNavClick(e, item.href, true)
                                                }
                                                className={cn(
                                                    "font-[family-name:var(--font-barlow)] text-2xl font-medium uppercase tracking-[0.2em] transition-colors",
                                                    isDark
                                                        ? "text-neutral-300 hover:text-white"
                                                        : "text-neutral-600 hover:text-neutral-900"
                                                )}
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setMenuOpen(false)}
                                                className={cn(
                                                    "font-[family-name:var(--font-barlow)] text-2xl font-medium uppercase tracking-[0.2em] transition-colors",
                                                    isDark
                                                        ? "text-neutral-300 hover:text-white"
                                                        : "text-neutral-600 hover:text-neutral-900"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.35 }}
                            >
                                <a
                                    href={PERSONAL.cvPath}
                                    download
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <SpecularButton
                                        size="md"
                                        radius={999}
                                        tint={isDark ? "#ffffff" : "#000000"}
                                        tintOpacity={isDark ? 0.08 : 0.06}
                                        blur={8}
                                        textColor={isDark ? "#f5f5f5" : "#171717"}
                                        lineColor={isDark ? "#ffffff" : "#171717"}
                                        baseColor={isDark ? "#525252" : "#a3a3a3"}
                                        intensity={1}
                                        thickness={1}
                                        followMouse={false}
                                        className="font-[family-name:var(--font-barlow)] text-sm tracking-[0.18em] uppercase"
                                    >
                                        {t("downloadCV")}
                                    </SpecularButton>
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}