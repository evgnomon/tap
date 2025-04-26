import * as React from "react";

// Define the shape of the context
interface ThemeContextType {
  theme: "light" | "dark";
  language: string;
  isRTL: boolean;
  toggleTheme: () => void;
  setLanguage: (lang: string, isRTL?: boolean) => void;
}

// Create Context with default value
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

// Context Provider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [language, setLanguageState] = React.useState<string>("en");
  const [isRTL, setIsRTL] = React.useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setLanguage = (lang: string, isRTL: boolean = false) => {
    setLanguageState(lang);
    setIsRTL(isRTL);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, language, isRTL, toggleTheme, setLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
