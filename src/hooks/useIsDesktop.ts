import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 768): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    updateSize(); // Initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isDesktop;
}
