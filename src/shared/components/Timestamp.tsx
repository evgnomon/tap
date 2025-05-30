import { useTheme } from "@shared/context/ThemeContext";
import React from "react";
import DateObject, { Calendar, Locale } from "react-date-object";
import { DateTime } from "luxon";

import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
interface DateDisplayProps {
  date: Date;
  format: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, format }) => {
  const { calendar, language, timezone } = useTheme();

  let c: Calendar = gregorian;
  let l: Locale = gregorian_en;

  if (calendar === "persian") {
    c = persian;
  }

  if (language === "fa" && calendar === "persian") {
    l = persian_fa;
  } else if (language === "en" && calendar === "persian") {
    l = persian_en;
  } else if (language === "fa" && calendar === "gregorian") {
    l = gregorian_fa;
  } else if (language === "en" && calendar === "gregorian") {
    l = gregorian_en;
  }
  const utcDate = DateTime.fromJSDate(date).setZone("UTC");
  const luxonDate = utcDate.setZone(timezone, { keepLocalTime: true });
  const convertedDate = luxonDate.toJSDate();
  const dateObj = new DateObject({
    date: convertedDate,
    calendar: c,
    locale: l,
  });
  const formattedDate = dateObj.format(format);
  return <span className="ps-1 pe-1">{formattedDate}</span>;
};

export default DateDisplay;
