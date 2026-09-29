"use client";
import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type RevealProps<T extends ElementType> = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className" | "as">;

// Fades + slides content in the first time it scrolls into view. Skips the
// animation entirely for visitors with "reduce motion" set. Any extra props
// (onMouseEnter, aria-*, etc.) are forwarded to the rendered tag.
export default function Reveal<T extends ElementType = "div">({
  children,
  className = "",
  delay = 0,
  as,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // "reveal" is forced fully visible under prefers-reduced-motion in globals.css,
    // regardless of the visible state below.
    <Tag
      ref={ref}
      className={`reveal transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
