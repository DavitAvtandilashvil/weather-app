import axios from "axios";

//ამ სერვისით axios-ის დახმარებით ვფეჩავთ დღიურ ამინდს აპის და key მეშვეობით
const FetchDailyWeather = () => {
  //   აპის ლინკი
  const url = `https://api.tomorrow.io/v4/weather/forecast?location=tbilisi&apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  // დაფეჩვის ფუნქცია
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      // თუ მივიღებთ დადებით პასუხს ვაბრუნებთ დატას
      return response.data;
    } catch (error) {
      // თუ ერორია
      throw error;
    }
  };

//   ვაბრუნებთ დაფეჩვის ფუნქციას რომ გამოივყენოთ სხვა და სხვა კომპონენტებში
  return fetchData;
};

export default FetchDailyWeather;
