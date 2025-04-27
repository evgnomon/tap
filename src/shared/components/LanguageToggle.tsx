import { langs } from "@shared/i18n";
import { useTheme } from "@shared/context/ThemeContext";

function LanguageToggle() {
  const { setLanguage, language, classes } = useTheme();
  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
  };

  return (
    <div>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={language}
        className={classes.box}
      >
        {langs.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageToggle;
