import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 30);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  );
}
