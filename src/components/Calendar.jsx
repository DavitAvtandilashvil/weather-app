import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ka } from "date-fns/locale";

registerLocale("ka", ka);

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      className="custom-date-picker"
      locale="ka"
    />
  );
};

export default Calendar;
