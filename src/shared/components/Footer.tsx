import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getPageLink } from "@shared/pages/Linker";

const footerPageLinks = ["home", "privacy"];

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
      <Link to={p.link}>{t(p.title)}</Link>
    </li>
  );
}

function FooterCopyRight() {
  const { t } = useTranslation();
  return <p>© 2025 {t("fullBrandName")}</p>;
}

function Footer() {
  return (
    <footer className="bg-primary flex flex-row justify-between items-center ps-4 pe-4">
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
