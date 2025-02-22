"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export function AnimatedElement({
  children,
  className = "",
  as = "div",
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const Element = as;

  return (
    <Element
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </Element>
  );
}
