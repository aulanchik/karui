import React from 'react';
import { extractInitials } from '@/utils';

type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    image?: string;
    size?: AvatarSize;
    credentials?: string;
    className?: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    id,
    image,
    size = 'small',
    credentials = '',
    alt = 'avatar',
    className,
    ...rest
}) => {

    const baseClasses = 'inline-flex items-center justify-center rounded-full overflow-hidden';
    const baseImageClasses = 'h-full w-full object-cover';

    const sizeClasses: Record<AvatarSize, string> = {
        small: 'h-8 w-8 text-sm',
        medium: 'h-12 w-12 text-base',
        large: 'h-16 w-16 text-lg',
    };

    const containerClasses = [
        className,
        baseClasses,
        sizeClasses[size],
        image ? 'bg-gray-200' : 'bg-blue-600 text-white',
    ].filter(Boolean).join(' ');

    return (
        <div
            role="img"
            aria-label={alt}
            data-testid="avatar"
            className={containerClasses}
            {...rest}
        >
            {image ? (
                <img
                    id={id}
                    data-testid="avatar-image"
                    className={baseImageClasses}
                    src={image}
                    alt={alt}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.textContent = extractInitials(credentials);
                    }}
                />
            ) : (
                <span className="font-medium" data-testid="avatar-initials">
                    {extractInitials(credentials)}
                </span>
            )}
        </div>
    );
}

export default Avatar;
