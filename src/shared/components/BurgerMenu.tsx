import { useTheme } from "@shared/context/ThemeContext";
import clsx from "clsx";
import React from "react";
import { slide as Menu } from "react-burger-menu";

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resources", path: "/resources" },
];

const BurgerMenu: React.FC = () => {
  const { isRTL } = useTheme();
  return (
    <Menu
      right={isRTL}
      customCrossIcon={false}
      className="bg-gray-100"
      burgerButtonClassName={clsx([
        "fixed top-5 w-6 h-5",
        isRTL && "right-3",
        !isRTL && "left-3",
      ])}
      burgerBarClassName="bg-gray-900"
      crossButtonClassName="w-4 h-4"
      crossClassName="bg-gray-300"
      overlayClassName="bg-black bg-opacity-10"
      itemListClassName="text-gray-900 p-3"
    >
      {menuItems.map((item) => (
        <a
          key={item.path}
          className="block text-gray-900 text-lg no-underline mb-2 hover:text-gray-300 transition-colors duration-200"
          href={item.path}
        >
          {item.label}
        </a>
      ))}
    </Menu>
  );
};

export default BurgerMenu;
