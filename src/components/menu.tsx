import { navStyles, getMenuItemClassName } from "@/styles";

export default function Menu({
  navItems,
  activeItem,
  onMenuItemSelected,
}: {
  navItems: string[];
  activeItem: string;
  onMenuItemSelected: (item: string, isMenuOpen: boolean) => void;
}) {
  return (
    <div id="content-mobile-nav" className={navStyles.menu}>
      {navItems.map((item) => {
        return (
          <button
            key={item}
            className={getMenuItemClassName(item === activeItem)}
            onClick={() => onMenuItemSelected(item, false)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
