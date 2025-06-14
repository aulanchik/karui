import React from 'react';
import classNames from 'classnames';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    isFullWidth?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'medium',
    isLoading = false,
    isFullWidth = false,
    variant = 'primary',
    iconLeft,
    iconRight,
    className,
    disabled,
    type = 'button',
    ...rest
}) => {
    const variantClasses: Record<ButtonVariant, string> = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
        ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
    };

    const sizeClasses: Record<ButtonSize, string> = {
        small: 'h-8 text-sm px-4',
        medium: 'h-10 text-base px-6',
        large: 'h-12 text-lg px-8',
    };

    const buttonClasses = classNames(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        {
            'w-full': isFullWidth,
            'opacity-60 cursor-not-allowed': disabled || isLoading,
            'relative': isLoading,
        },
        className
    );

    const ariaProps = {
        'aria-disabled': disabled || isLoading,
        'aria-busy': isLoading,
        ...(rest['aria-label'] ? {} : { 'aria-label': children?.toString() }),
    };

    return (
        <button
            className={buttonClasses}
            type={type}
            disabled={disabled || isLoading}
            {...ariaProps}
            {...rest}
        >
            {isLoading && (
                <span className="absolute flex items-center" aria-hidden="true">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </span>
            )}
            {iconLeft && <span className="flex items-center">{iconLeft}</span>}
            <span className={isLoading ? 'invisible' : ''}>{children}</span>
            {iconRight && <span className="flex items-center">{iconRight}</span>}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
