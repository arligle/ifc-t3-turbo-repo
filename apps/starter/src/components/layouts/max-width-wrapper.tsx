import type { ReactNode } from "react";

import { cn } from "@acme/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full px-2.5 lg:px-10", className)}>
      {children}
    </div>
  );
}
