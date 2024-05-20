"use client";

import type { ReactNode } from "react";
import { createContext } from "react";

import { cn } from "@acme/utils";

import { useScroll } from "../use-scroll";
import { MaxWidthWrapper } from "./max-width-wrapper";

export type TopbarTheme = "light" | "dark";

export const TopbarContext = createContext<{ theme: TopbarTheme }>({
  theme: "light",
});
interface TopbarProps {
  theme?: TopbarTheme;
  children: ReactNode;
}
export function Topbar({ theme = "light", children }: TopbarProps) {
  const scrolled = useScroll(80);

  return (
    <TopbarContext.Provider value={{ theme }}>
      <div
        className={cn(
          "sticky inset-x-0 top-0 z-30 w-full transition-all",
          theme === "dark" && "dark",
        )}
      >
        <div
          className={cn(
            "-z-1 absolute inset-0 border-transparent transition-all",
            {
              "border-b border-black/10 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75":
                scrolled,
            },
          )}
        />
        <MaxWidthWrapper className="relative">{children}</MaxWidthWrapper>
      </div>
    </TopbarContext.Provider>
  );
}
