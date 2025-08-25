"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Core styles to match your Solutions cards
        "relative rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-[20px] saturate-180",
        // Additional class names passed from the parent component
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}