import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "danger";
    className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const base = "px-2 py-1 rounded-full text-sm font-semibold";
    const variants: Record<string,string> = {
        default: "bg-gray-200 text-gray-800",
        success: "bg-green-100 text-green-800",
        danger: "bg-red-100 text-red-800",
    };
    return <span className={`${base} ${variants[variant] || variants.default} ${className}`}>{children}</span>;
}
