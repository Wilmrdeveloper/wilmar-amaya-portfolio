"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { NextIntlClientProvider } from "next-intl";

type Theme = "light" | "dark";

type ThemeContextValue = {
    theme: Theme;
    resolvedTheme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "wilmar-theme";

function applyTheme(theme: Theme) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
        const initial: Theme =
            stored === "light" || stored === "dark" ? stored : "dark";
        setThemeState(initial);
        applyTheme(initial);
    }, []);

    const setTheme = useCallback((next: Theme) => {
        setThemeState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
    }, []);

    const value = useMemo(
        () => ({
            theme,
            resolvedTheme: theme,
            setTheme,
        }),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        return {
            theme: "dark" as Theme,
            resolvedTheme: "dark" as Theme,
            setTheme: (_theme: Theme) => { },
        };
    }
    return ctx;
}

export function Providers({
    children,
    locale,
    messages,
}: {
    children: React.ReactNode;
    locale: string;
    messages: Record<string, unknown>;
}) {
    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="America/Bogota"
        >
            <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
    );
}