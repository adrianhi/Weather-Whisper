import { weatherAlert } from "@data/weatherCode";

export const getWeatherDescriptionByCode = (weatherCode, day) => {
  const weatherCodeDescriptions = weatherAlert(day);

  const matchingWeather = weatherCodeDescriptions.find(
    (weather) => weather.code === weatherCode
  );


  return matchingWeather?.description
    ? {
        description: matchingWeather.description,
        imagePath: matchingWeather.imagePath,
      }
    : {
        description: "Unknown",
        imagePath: "/images/unknown.png",
      };
};
