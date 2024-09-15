import { useQuery } from "react-query";
import FetchDailyWeather from "../services/FetchDailyWeather";

// ვქმინუთ ჰუკს რეაქტ ქუერის გამოყენებით
const useDailyWeather = () => {
  //შემოვაიმპორთეთ ფუნქცია დღეების ამინდის სერვისიდან რათა გამოიყენოთ ქუერიში
  const fetchData = FetchDailyWeather();

  const { data, isLoading, isError, error } = useQuery(
    "daily-weather",
    fetchData
  );

  //   ვაბრუნებთ ამ ინფორმაციას სხვა კომპონენტებში გამოსაყენებლად
  return { data, isLoading, isError, error };
};

export default useDailyWeather;
