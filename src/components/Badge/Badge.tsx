import React from 'react';
import classNames from 'classnames';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string;
    className?: string;
    variant?: BadgeVariant;
    isLoading?: boolean;
    isBordered?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
    text,
    className,
    variant = 'default',
    isLoading,
    isBordered,
}: BadgeProps) => {
    const baseClasses =
        'relative flex items-center justify-center py-2 px-4 rounded text-sm font-medium';

    const badgeVariant: Record<BadgeVariant, string> = {
        default: 'bg-gray-200 text-gray-800',
        primary: 'bg-blue-200 text-blue-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-orange-100 text-orange-800',
        error: 'bg-red-600 text-white',
    };

    const spinnerColors: Record<BadgeVariant, string> = {
        default: 'text-gray-800',
        primary: 'text-blue-800',
        success: 'text-green-800',
        warning: 'text-orange-800',
        error: 'text-white',
    };

    const classes = classNames(
        baseClasses,
        badgeVariant[variant],
        {
            'border': isBordered,
            'border-gray-400': isBordered && variant === 'default',
            'border-blue-800': isBordered && variant === 'primary',
            'border-green-800': isBordered && variant === 'success',
            'border-orange-800': isBordered && variant === 'warning',
            'border-red-800': isBordered && variant === 'error',
            'opacity-60': isLoading,
        },
        className
    );

    return (
        <span className={classes} data-testid="badge" aria-busy={isLoading}>
            <span className="relative flex items-center justify-center min-w-fit">
                {isLoading ? (
                    <span
                        className="flex items-center justify-center w-full h-full"
                        aria-hidden="true"
                    >
                        <svg
                            className={
                                classNames(
                                    'animate-spin h-6 w-6',
                                    spinnerColors[variant]
                                )}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </span>
                ) : (
                    <span className="w-full h-full">{text}</span>
                )}
            </span>
        </span>
    );
};

export default Badge;
