// src/components/FormElements/InputField.js
import React from "react";

export default function InputField({
    label,
    value,
    onChange,
    onBlur,
    placeholder,
    suffix,
    charCount = false,
    disabled = false,
    ...rest
}) {
    const baseClasses = "w-full p-3 border rounded focus:outline-none";
    const enabledClasses = "border-gray-300 focus:ring-2 focus:ring-[#96C576]";
    const disabledClasses = "bg-gray-100 cursor-not-allowed border-gray-200";

    return (
        <div className="mb-6 relative">
            <label className="block text-sm text-gray-600 mb-1">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => !disabled && onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                className={`${baseClasses} ${disabled ? disabledClasses : enabledClasses}`}
                {...rest}
            />

            {suffix && (
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <span className="text-[#96C576] font-medium">{suffix}</span>
                </div>
            )}

            {charCount && (
                <div className="absolute bottom-0 right-0 m-2 pointer-events-none">
                    <span className="text-xs text-gray-400">
                        {value?.length}
                    </span>
                </div>
            )}
        </div>
    );
}
