import { weatherAlert } from "@data/weatherCode";

export const getWeatherDescriptionByCode = (weatherCode, day) => {
  const weatherCodeDescriptions = weatherAlert(day);

  const matchingWeather = weatherCodeDescriptions.find(
    (weather) => weather.code === weatherCode
  );

  const alertKeywords = ["overcast", "heavy", "violent"];
  const containsKeyword = alertKeywords.some((keyword) =>
    matchingWeather.description.toLowerCase().includes(keyword)
  );

  return matchingWeather?.description
    ? {
        description: matchingWeather.description,
        imagePath: matchingWeather.imagePath,
        containsKeyword,
      }
    : {
        description: "Unknown",
        imagePath: "/images/unknown.png",
      };
};
