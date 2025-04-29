import { useTheme, calendars } from "@shared/context/ThemeContext";

function LanguageToggle() {
  const { classes, setCalendar, calendar, language } = useTheme();
  const handleCalendar = (c: string) => {
    setCalendar(c);
  };

  return (
    <div>
      <select
        onChange={(e) => handleCalendar(e.target.value)}
        value={calendar}
        className={classes.box}
      >
        {calendars.map((c) => (
          <option key={c.name} value={c.name}>
            {c.title[language]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageToggle;
