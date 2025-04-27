import i18n from "@shared/i18n";
import * as React from "react";
import { parseCookies } from "@shared/utils/cookies";

const rtlLanguages = ["ar", "he", "fa"];

export interface Theme {
  name: Record<string, string>;
  bg: string;
  text: string;
  cardBg: string;
  accent: string;
  box: string;
}

type ThemeName = string;
export interface Themes {
  [key: ThemeName]: Theme;
}

export const themes: Themes = {
  light: {
    name: {
      en: "Light",
    },
    bg: "bg-bg-primary text-text-primary",
    text: "text-text-primary",
    cardBg: "bg-bg-secondary text-text-secondary",
    accent: "bg-accent-primary hover:bg-accent-primary/80",
    box: "ps-1 pe-1 bg-bg-primary border border-gray-300 text-gray-700 focus:outline-none",
  },
  dark: {
    name: {
      en: "Dark",
    },
    bg: "dark:bg-dark-bg-primary",
    text: "dark:text-dark-text-primary",
    cardBg: "dark:bg-dark-bg-tertiary",
    accent: "dark:bg-dark-accent-primary dark:hover:bg-dark-accent-primary/80",
    box: "ps-1 pe-1 dark:bg-dark-bg-primary dark:text-dark-text-secondary dark:text-black dark:border dark:border-gray-700",
  },
  sepia: {
    name: {
      en: "Sepia",
    },
    bg: "sepia:bg-sepia-bg-primary",
    text: "sepia:text-sepia-text-primary",
    cardBg: "sepia:bg-sepia-bg-tertiary",
    accent:
      "sepia:bg-sepia-accent-primary sepia:hover:bg-sepia-accent-primary/80",
    box: "sepia:border sepia:border-sepia-300 sepia:rounded-md sepia:px-4 sepia:py-2 sepia:text-sepia-700 sepia:focus:outline-none sepia:focus:ring-2 sepia:focus:ring-sepia-500",
  },
  retro: {
    name: {
      en: "Retro",
    },
    bg: "retro:bg-retro-bg-primary",
    text: "retro:text-retro-text-primary",
    cardBg: "retro:bg-retro-bg-tertiary",
    accent:
      "retro:bg-retro-accent-primary retro:hover:bg-retro-accent-primary/80",
    box: "retro:border retro:border-retro-300 retro:rounded-md retro:px-4 retro:py-2 retro:text-retro-700 retro:focus:outline-none retro:focus:ring-2 retro:focus:ring-retro-500",
  },
};

interface ThemeContextType {
  theme: string;
  language: string;
  isRTL: boolean;
  classes: Theme;
  toggleTheme: (name: string) => void;
  setLanguage: (lang: string, isRTL?: boolean) => void;
}

// Create Context with default value
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

// Utility to set a cookie (client-side only)
const setCookie = (name: string, value: string, days: number = 365) => {
  if (typeof window === "undefined") return; // Guard for server
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
};

// Props to receive initial cookie values from server
interface ThemeProviderProps {
  children: React.ReactNode;
  initialCookies?: Record<string, string>; // Passed from server
}

// Context Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialCookies = {},
}) => {
  // Initialize state from cookies
  const getInitialTheme = (): string => {
    const cookies =
      typeof window !== "undefined"
        ? parseCookies(document.cookie)
        : initialCookies;
    return cookies.theme || "light";
  };

  const getInitialLanguage = (): string => {
    const cookies =
      typeof window !== "undefined"
        ? parseCookies(document.cookie)
        : initialCookies;
    return cookies.language || "en";
  };

  const getInitialIsRTL = (): boolean => {
    const cookies =
      typeof window !== "undefined"
        ? parseCookies(document.cookie)
        : initialCookies;
    return cookies.isRTL === "true";
  };
  const [theme, setTheme] = React.useState<string>(getInitialTheme);
  const [language, setLanguageState] =
    React.useState<string>(getInitialLanguage);
  const [isRTL, setIsRTL] = React.useState<boolean>(getInitialIsRTL);

  // Update cookies on state changes (client-side only)
  React.useEffect(() => {
    setCookie("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    setCookie("language", language);
    setCookie("isRTL", String(isRTL));
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
    i18n.changeLanguage(language);
  }, [language, isRTL]);

  const toggleTheme = (name: string) => {
    setTheme(name);
  };

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (rtlLanguages.includes(lang)) {
      setIsRTL(true);
      return;
    }
    setIsRTL(false);
  };
  const classes = themes[theme];

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({ theme, language, isRTL, toggleTheme, setLanguage, classes }),
    [theme, language, isRTL],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
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
