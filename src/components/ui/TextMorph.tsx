"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextMorphProps {
    words?: string[];
    duration?: number;
    className?: string;
}

export function TextMorph({
    words = ["Full Stack", "Data Analyst", "Software Developer", "Problem Solver"],
    duration = 2.8,
    className = "",
}: TextMorphProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration * 1000);
        return () => clearInterval(interval);
    }, [duration, words.length]);

    return (
        <div className={cn("relative flex flex-col items-center", className)}>
            <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{ minHeight: "1.4em" }}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        exit={{ opacity: 0, filter: "blur(10px)", y: -16 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="block text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-600 dark:text-neutral-300"                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Indicadores sutiles */}
            <div className="mt-4 flex gap-1.5 items-center">
                {words.map((_, i) => (
                    <motion.span
                        key={i}
                        animate={{
                            width: i === index ? 18 : 5,
                            opacity: i === index ? 1 : 0.25,
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="block h-[3px] rounded-full bg-neutral-800 dark:bg-neutral-200"
                        style={{ minWidth: 5 }}
                    />
                ))}
            </div>
        </div>
    );
}