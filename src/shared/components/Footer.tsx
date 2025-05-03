import { useTranslation } from "react-i18next";
import { getPageLink } from "@shared/pages/Linker";
import { useTheme } from "@shared/context/ThemeContext";
import Timestamp from "./Timestamp";
import clsx from "clsx";
import {A} from "./Document";

const footerPageLinks = ["home", "privacy", "blog", "docs"];

interface FooterItemsProps {
  children: React.ReactNode;
}

function FooterItems({ children }: FooterItemsProps) {
  return (
    <ul className="flex flex-row justify-between items-center p-4">
      {children}
    </ul>
  );
}

interface LabelProps {
  page: string;
}

function FooterItem({ page }: LabelProps) {
  const { t } = useTranslation();
  const p = getPageLink(page);
  return (
    <li className="p-2">
      <A href={p.link} external={p.external}>{t(p.title)}</A>
    </li>
  );
}

function FooterCopyRight() {
  const { t } = useTranslation();
  return (
    <p>
      {t("copyright")}
      <span className="number">
        <Timestamp date={new Date(2022, 1)} format="YYYY" />
        -
        <Timestamp date={new Date()} format="YYYY" />
      </span>
      {t("fullBrandName")}
    </p>
  );
}

function Footer() {
  const { classes } = useTheme();
  return (
    <footer
      className={clsx(
        "flex flex-row justify-between items-center ps-4 pe-4",
        classes.cardBg,
      )}
    >
      <FooterCopyRight />
      <FooterItems>
        {footerPageLinks.map((page) => (
          <FooterItem key={page} page={page} />
        ))}
      </FooterItems>
    </footer>
  );
}

export default Footer;
