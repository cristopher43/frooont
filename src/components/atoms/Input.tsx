import React from "react";

interface InputProps {
    label?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

export default function Input({
                                  label,
                                  type = "text",
                                  value,
                                  onChange,
                                  placeholder = "",
                                  className = "",
                              }: InputProps) {
    return (
        <div className={`mb-4 ${className}`}>
            {label && <label className="block text-gray-700 font-bold mb-2">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
        </div>
    );
}
