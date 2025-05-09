import React from "react";
// import { Link } from "react-router-dom";
import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import Content from "@shared/components/Content";
import clsx from "clsx";
import { useTheme } from "@shared/context/ThemeContext";
import BurgerMenu from "./BurgerMenu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isRTL } = useTheme();
  const { classes } = useTheme();
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col text-primary",
        !isRTL && "font-inter",
        isRTL && "font-vazir",
        classes.bg,
        classes.text,
      )}
    >
      <Header />
      <BurgerMenu />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
