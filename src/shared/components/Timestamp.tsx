import React from "react";
import DateObject from "react-date-object";

interface DateDisplayProps {
  date: Date;
  format: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date, format }) => {
  const dateObj = new DateObject(date);
  const formattedDate = dateObj.format(format);

  return <span className="ps-1 pe-1">{formattedDate}</span>;
};

export default DateDisplay;
