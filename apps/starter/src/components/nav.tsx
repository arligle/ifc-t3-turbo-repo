"use client";

import { createContext } from "react";

import { cn } from "@acme/utils";

import { MaxWidthWrapper } from "./max-width-wrapper";
import { useScroll } from "./use-scroll";

export type NavTheme = "light" | "dark";

export const NavContext = createContext<{ theme: NavTheme }>({
  theme: "light",
});

export function Nav({ theme = "light" }: { theme?: NavTheme }) {
  const scrolled = useScroll(80);

  return (
    <NavContext.Provider value={{ theme }}>
      <div
        className={cn(
          "sticky inset-x-0 top-0 z-30 w-full transition-all",
          theme === "dark" && "dark",
        )}
      >
        {/* <div
          className={cn(
            "-z-1 absolute inset-0 border-transparent transition-all",
            {
              "border-b border-black/10 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75":
                scrolled,
              "border-b border-black/10 bg-white dark:border-white/10 dark:bg-black":
                selectedLayout &&
                HIDE_BACKGROUND_SEGMENTS.includes(selectedLayout),
            },
          )}
        /> */}
        <div
          className={cn(
            "-z-1 absolute inset-0 border-transparent transition-all",
            {
              "border-b border-black/10 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75":
                scrolled,
            },
          )}
        />
        <MaxWidthWrapper className="relative">
          <div className=" h-12">设置菜单</div>
        </MaxWidthWrapper>
      </div>
    </NavContext.Provider>
  );
}
