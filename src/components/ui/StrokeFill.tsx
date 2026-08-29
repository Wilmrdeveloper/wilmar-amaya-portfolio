"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StrokeFillProps {
    text?: string;
    duration?: number;
    className?: string;
    isDark?: boolean;
}

export function StrokeFill({
    text = "Wilmar Amaya",
    duration = 2.8,
    className = "",
    isDark = true,
}: StrokeFillProps) {
    const strokeColor = isDark ? "#e5e5e5" : "#171717";
    const fillColor = isDark ? "#ffffff" : "#0a0a0a";

    return (
        <div className={cn("w-full flex items-center justify-center", className)}>
            <svg
                viewBox="0 0 900 160"
                className="w-full max-w-4xl h-auto"
                style={{ overflow: "visible" }}
            >
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    strokeWidth="1.8"
                    className="font-bold text-[90px] tracking-tighter"
                    style={{
                        stroke: strokeColor,
                        fill: "transparent",
                    }}
                    initial={{
                        strokeDasharray: 1200,
                        strokeDashoffset: 1200,
                        fill: "transparent",
                    }}
                    animate={{
                        strokeDashoffset: 0,
                        fill: fillColor,
                    }}
                    transition={{
                        duration,
                        ease: "easeInOut",
                        fill: {
                            delay: duration * 0.65,
                            duration: duration * 0.35,
                            ease: "easeIn",
                        },
                    }}
                >
                    {text}
                </motion.text>
            </svg>
        </div>
    );
}