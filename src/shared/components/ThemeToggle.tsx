import { useTheme, themes } from "@shared/context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme, classes } = useTheme();
  return (
    <select
      onChange={(e) => toggleTheme(e.target.value)}
      value={theme}
      className={classes.box}
    >
      {Object.keys(themes).map((themeKey) => (
        <option key={themeKey} value={themeKey}>
          {themes[themeKey].name["en"]}
        </option>
      ))}
    </select>
  );
}

export default ThemeToggle;
