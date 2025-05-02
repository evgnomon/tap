import React from "react";
import clsx from "clsx";
import { useTheme } from "@shared/context/ThemeContext";
import { Link } from "react-router-dom";

interface DocumentProps {
  children: React.ReactNode;
}

interface LinkProps extends DocumentProps {
  href: string;
}

// Custom components with Tailwind CSS
export const P: React.FC<DocumentProps> = ({ children }) => (
  <p className="mb-5 text-base leading-relaxed">{children}</p>
);

export const UL: React.FC<DocumentProps> = ({ children }) => (
  <ul className="list-disc pl-6 my-4">{children}</ul>
);

export const LI: React.FC<DocumentProps> = ({ children }) => (
  <li className="mb-3 text-base">{children}</li>
);

export const Strong: React.FC<DocumentProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <strong
      className={clsx([
        "font-semibold",
        theme === "light" && "text-gray-900",
        theme === "dark" && "dark:text-gray-100",
      ])}
    >
      {children}
    </strong>
  );
};

export const H1: React.FC<DocumentProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h1
      className={clsx([
        "text-3xl font-bold mb-6 leading-tight",
        theme === "light" && "text-gray-900",
        theme === "dark" && "dark:text-gray-100",
      ])}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<DocumentProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      className={clsx([
        "text-xl font-semibold mt-8 mb-4",
        theme === "light" && "text-gray-900",
        theme === "dark" && "dark:text-gray-100",
      ])}
    >
      {children}
    </h2>
  );
};

export const A: React.FC<LinkProps> = ({ href, children }) => (
  <Link
    to={href}
    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
  >
    {children}
  </Link>
);

export const Section: React.FC<DocumentProps> = ({ children }) => (
  <section className="mb-8">{children}</section>
);

export const Article: React.FC<DocumentProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <article
      className={clsx([
        "max-w-3xl mx-auto px-4 sm:px-6 py-8",
        theme === "light" && "text-gray-700",
        theme === "dark" && "dark:text-gray-300",
      ])}
    >
      {children}
    </article>
  );
};
