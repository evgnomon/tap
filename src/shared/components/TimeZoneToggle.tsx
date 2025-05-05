import { useTheme } from "@shared/context/ThemeContext";
import { timezones } from "@shared/utils/Timezone";

function TimeZoneToggle() {
  const { classes, setTimeZone, timezone } = useTheme();
  const handleTimeZone = (c: string) => {
    setTimeZone(c);
  };

  return (
    <div>
      <select
        onChange={(e) => handleTimeZone(e.target.value)}
        value={timezone}
        className={classes.box}
      >
        {timezones.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeZoneToggle;
