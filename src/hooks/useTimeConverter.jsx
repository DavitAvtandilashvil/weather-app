// აკონვერტირებს თარიღს დღის რიცხვში და თვის სახელში
import { useMemo } from "react";

const useTimeConverter = (time) => {
  const formattedDate = useMemo(() => {
    const date = new Date(time);
    const options = { day: "2-digit", month: "long" };
    return date.toLocaleDateString("en-GB", options);
  }, [time]);

  return formattedDate;
};

export default useTimeConverter;
