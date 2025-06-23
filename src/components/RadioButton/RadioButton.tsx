import React from 'react';

export interface RadioButtonProps {
    label: string;
    value: string;
    name: string;
    checked: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, name, checked, onChange, disabled }: RadioButtonProps) => {
    const isDisabled = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    const inputId = `radio-${label.replace(/\s+/g, '-')}-${Math.random().toString(36).slice(2, 9)}`;

    return (
        <div className={`flex items-center space-x-2 ${isDisabled}`}>
            <input
                type="radio"
                id={inputId}
                name={name}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="h-4 w-6 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500"
                disabled={disabled}
            />
            <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
                {label}
            </label>
        </div>
    )
}

export default RadioButton;
