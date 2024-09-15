// აკონვერტირებს თარიღს დღის სახელში

import { useMemo } from "react";
const useDayConverter = (time) => {
  const formatedDay = useMemo(() => {
    const date = new Date(time);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[date.getDay()];
  });

  return formatedDay;
};

export default useDayConverter;
