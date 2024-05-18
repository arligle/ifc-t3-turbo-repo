import type { Viewport } from "next";

import { cn } from "@acme/ui";
import { Toaster } from "@acme/ui/toast";

import "~/styles/globals.css";

import { Nav } from "~/components/nav";
import { constructMetadata } from "~/lib/utils";
import { fontSans } from "~/lib/utils/fonts";

export const metadata = constructMetadata();

// 根据用户操作系统的设置，自动切换主题
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className=" h-full" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.className,
        )}
      >
        <div className="flex min-h-screen flex-col justify-between bg-gray-50">
          <Nav />
          {children}

          <Toaster />
        </div>
      </body>
    </html>
  );
}
