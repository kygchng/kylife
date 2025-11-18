"use client";

import { useEffect, useState } from "react";

interface WorkPageWrapperProps {
  children: React.ReactNode;
}

export default function WorkPageWrapper({ children }: WorkPageWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Small delay to ensure the animation is visible
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        mounted
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-100"
      }`}
    >
      {children}
    </div>
  );
}
