import React from 'react';

// A tipagem continua a mesma e está correta.
type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ComponentProps<'a'>;

export function ButtonCV({ children, className = '', ...props }: ButtonProps) {
    const baseClasses =
        'flex items-center justify-center gap-2 py-3 px-6 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300';

    return (
        <a
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}