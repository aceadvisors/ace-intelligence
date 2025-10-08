"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import CursorTrail from "@/components/CursorTrail";
import useIsDesktop from "@/hooks/useIsDesktop"; // 👈 import the hook

export default function ClientLayout({ children }: { children: ReactNode }) {
  const isDesktop = useIsDesktop();

  return (
    <NextUIProvider>
      {isDesktop && <CursorTrail />} {/* Only render on desktop */}
      {children}
    </NextUIProvider>
  );
}
