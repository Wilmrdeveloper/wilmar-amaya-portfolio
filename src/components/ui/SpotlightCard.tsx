"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/providers";
import "./SpotlightCard.css";

interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string;
    spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor,
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    // Gris suave (dark) / morado suave (light)
    const activeColor =
        spotlightColor ??
        (isDark ? "rgba(180, 180, 180, 0.14)" : "rgba(139, 92, 246, 0.12)");

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", activeColor);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`card-spotlight ${className}`}
        // No usamos data-theme en el HTML para evitar mismatch SSR/CSR
        >
            {children}
        </div>
    );
};

export default SpotlightCard;