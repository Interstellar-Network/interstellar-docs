import * as React from "react";
import { cn } from "@site/src/utils/cn"; // Ensure cn.ts exists in utils

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-gray-300 bg-white p-6 shadow-md", className)}>
      {children}
    </div>
  );
}