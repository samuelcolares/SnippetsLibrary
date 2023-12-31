"use client";

import { NextUIProvider } from "@nextui-org/react";

export function NextUI({ children }: { children: React.ReactNode }) {
  return <NextUIProvider className="h-full flex flex-col">{children}</NextUIProvider>;
}
