import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "danger";
    className?: string;
}

export default function Badge({
                                  children,
                                  variant = "default",
                                  className = ""
                              }: BadgeProps) {
    const base =
        "px-3 py-1 rounded-full text-sm font-bold shadow-md inline-flex items-center";

    const variants: Record<string, string> = {
        default:
            "bg-gradient-to-r from-gray-700 to-gray-900 text-gray-200 border border-gray-500",
        success:
            "bg-gradient-to-r from-emerald-500 to-green-600 text-white border border-emerald-300",
        danger:
            "bg-gradient-to-r from-red-600 to-red-800 text-white border border-red-300",
    };

    return (
        <span className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
