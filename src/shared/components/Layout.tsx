import React from "react";
// import { Link } from "react-router-dom";
import Footer from "@shared/components/Footer";
import Header from "@shared/components/Header";
import Content from "@shared/components/Content";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
