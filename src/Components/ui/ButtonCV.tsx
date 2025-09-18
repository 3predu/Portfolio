import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"a">;

export function ButtonCV({ children, className = "", ...props }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-2 py-3 px-6 text-white font-semibold rounded-full shadow-lg bg-purple-700 hover:bg-purple-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition-all duration-300";

  return (
    <a className={`${baseClasses} ${className}`} {...props}>
      {children}
    </a>
  );
}
