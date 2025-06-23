import React from 'react'

export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled }: CheckboxProps) => {
    const isDisabled = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return (
        <label className={`flex items-center space-x-2 ${isDisabled}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                disabled={disabled}
            />
            <span className="text-sm font-medium text-gray-700">{label}</span>
        </label>
    );
}

export default Checkbox;
