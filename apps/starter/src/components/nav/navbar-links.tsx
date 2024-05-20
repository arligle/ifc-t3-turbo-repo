"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@acme/utils";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Templates",
    href: "/products/template",
  },
  {
    id: 2,
    name: "Ui Kits",
    href: "/products/uikit",
  },
  {
    id: 3,
    name: "Icons",
    href: "/products/icon",
  },
];

export function NavbarLinks() {
  // 读取当前 URL 的路径名
  const location = usePathname();

  return (
    <div className="col-span-6 hidden items-center justify-center gap-x-2 md:flex">
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group flex items-center rounded-md px-2 py-2 font-medium",
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
