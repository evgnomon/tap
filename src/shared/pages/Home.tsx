import React from "react";
import { useTheme } from "@shared/context/ThemeContext";

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow">
      <h1>Theme: {theme}</h1>
    </div>
  );
};

export default Home;
