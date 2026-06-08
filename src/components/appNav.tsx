import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMobileNavItemClassName, getNavItemClassName, navStyles } from "@/styles/nav";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Marathons", href: "/marathons" },
  { label: "Games", href: "/games" },
  { label: "Baking", href: "/baking" },
] as const;

export default function AppNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div id="content-mobile-nav" className={navStyles.mobileMenu}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={getMobileNavItemClassName(isActive)}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
