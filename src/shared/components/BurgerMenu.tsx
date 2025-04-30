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
];

const BurgerMenu: React.FC = () => {
  const { isRTL } = useTheme();
  return (
    <Menu
      right={isRTL}
      customCrossIcon={false}
      className="bg-gray-800"
      burgerButtonClassName={clsx([
        "fixed top-3 w-4 h-3",
        isRTL && "right-3",
        !isRTL && "left-3",
      ])}
      burgerBarClassName="bg-gray-700"
      crossButtonClassName="w-3 h-3"
      crossClassName="bg-gray-400"
      overlayClassName="bg-black bg-opacity-30"
      itemListClassName="text-gray-300 p-3"
    >
      {menuItems.map((item) => (
        <a
          key={item.path}
          className="block text-gray-200 text-lg no-underline mb-2 hover:text-white transition-colors duration-200"
          href={item.path}
        >
          {item.label}
        </a>
      ))}
    </Menu>
  );
};

export default BurgerMenu;
