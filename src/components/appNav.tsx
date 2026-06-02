"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItemClassName, navStyles } from "@/styles/nav";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Marathons", href: "/marathons" },
  { label: "Games", href: "/games" },
  { label: "Baking", href: "/baking" },
] as const;

export default function AppNav() {
  const pathname = usePathname();

  return (
    <nav className={navStyles.container} aria-label="Content sections">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href} className={getNavItemClassName(isActive)}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
