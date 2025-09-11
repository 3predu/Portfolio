// src/components/ui/ScrollAnimation.tsx
import { useInView } from 'react-intersection-observer';
import React from 'react';

type ScrollAnimationProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Propriedade opcional para atrasar a animação
};

export function ScrollAnimation({ children, className, delay = 0 }: ScrollAnimationProps) {
    const { ref, inView } = useInView({
        triggerOnce: true, // A animação acontece apenas uma vez
        threshold: 0.1,    // A animação começa quando 10% do elemento está visível
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${className} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${delay}ms` }} // Aplica o delay via style
        >
            {children}
        </div>
    );
}