import ThemeToggle from "@shared/components/ThemeToggle";
import LanguageToggle from "@shared/components/LanguageToggle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useTheme } from "@shared/context/ThemeContext";

function Header() {
  const { t } = useTranslation();
  const { classes } = useTheme();
  console.log("Layout classes", classes);
  return (
    <header
      className={clsx([
        "p-1 px-4 text-center sticky top-0 z-10 flex flex-direction-row items-center justify-between",
        classes.cardBg,
      ])}
    >
      <div className="flex items-center gap-2">
        <div className="z-logo" />
        <h1 className="text-1xl font-bold">{t("fullBrandName")}</h1>
      </div>

      <ThemeToggle />
      <LanguageToggle />
      <search>
        <form>
          <input
            name="fsrch"
            id="fsrch"
            placeholder={t("searchPlaceholder")}
            className={clsx(classes.box)}
          />
        </form>
      </search>
    </header>
  );
}

export default Header;
