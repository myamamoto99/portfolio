import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItemClassName, navStyles } from "@/styles/nav";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./menu";
import { useRouter } from "next/router";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Marathons", href: "/marathons" },
  { label: "Games", href: "/games" },
  { label: "Baking", href: "/baking" },
] as const;

export default function AppNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedNavItem = navItems.find((item) => item.href === pathname);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDownOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navRef.current && !navRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDownOutside);
    document.addEventListener("touchstart", handlePointerDownOutside);

    return () => {
      document.removeEventListener("mousedown", handlePointerDownOutside);
      document.removeEventListener("touchstart", handlePointerDownOutside);
    };
  }, [isMenuOpen]);

  function onMenuItemSelected(selectedLabel: string, isOpen: boolean) {
    setIsMenuOpen(isOpen);
    router.push(navItems.find((item) => item.label === selectedLabel)?.href || "/home");
  }

  return (
    <nav ref={navRef} className={navStyles.container} aria-label="Content sections">
      <div className={navStyles.desktopList}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className={getNavItemClassName(isActive)}>
              {item.label}
            </Link>
          );
        })}
      </div>

      <button
        type="button"
        className={navStyles.mobileToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="content-mobile-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <GiHamburgerMenu aria-hidden />
      </button>

      {isMenuOpen && (
        <Menu
          navItems={navItems.map((item) => item.label)}
          activeItem={selectedNavItem?.label ?? ""}
          onMenuItemSelected={onMenuItemSelected}
        />
      )}
    </nav>
  );
}
