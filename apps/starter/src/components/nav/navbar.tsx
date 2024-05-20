import React from "react";
import Link from "next/link";

import { Button } from "@acme/ui/button";

import { MobileMenu } from "./MobileMenu";
import { NavbarLinks } from "./navbar-links";

export default function Navbar() {
  return (
    <nav className="relative mx-auto flex w-full items-center px-2 py-3 md:grid md:grid-cols-12 md:px-2">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold ">
            AioPIM<span className="text-primary">IFC</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="ms-auto flex items-center gap-x-2 md:col-span-3">
        <div className="flex items-center gap-x-2">
          <Button>登录</Button>
          <Button variant="secondary">注册</Button>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
