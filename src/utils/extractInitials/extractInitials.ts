const extractInitials = (name: string): string => {
    if (!name) return '';
    const words = name.trim().split(/\s+/);
    const initials = words
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join('');
    return initials;
};

export default extractInitials;
