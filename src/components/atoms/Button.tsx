import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
                                   children,
                                   onClick,
                                   className = "",
                                   type = "button",
                               }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={(e) => {
                e.preventDefault();
                if (onClick) onClick();
            }}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-all hover:scale-105 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
}
