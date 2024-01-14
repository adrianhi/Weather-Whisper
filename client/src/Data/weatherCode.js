export const weatherAlert = (day) => {
  const isNight = day === 0;
  const weatherHour = isNight ? "night" : "day";
  
  const weatherCodeDescriptions = [
    {
      code: 0,
      description: "Clear sky",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Clear.webp`,
    },
    {
      code: 1,
      description: "Mainly clear",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Clouds.webp`,
    },
    {
      code: 2,
      description: "Partly cloudy",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Clouds.webp`,
    },
    {
      code: 3,
      description: "Overcast",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Clouds.webp`,
    },
    {
      code: 45,
      description: "Fog and depositing rime fog",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 48,
      description: "Fog and depositing rime fog",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 51,
      description: "Drizzle - Light intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 53,
      description: "Drizzle - Moderate intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 55,
      description: "Drizzle - Dense intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 56,
      description: "Freezing Drizzle - Light intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 57,
      description: "Freezing Drizzle - Dense intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 61,
      description: "Rain - Slight intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 63,
      description: "Rain - Moderate intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 65,
      description: "Rain - Heavy intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 66,
      description: "Freezing Rain - Light intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 67,
      description: "Freezing Rain - Heavy intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 71,
      description: "Snowfall - Slight intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 73,
      description: "Snowfall - Moderate intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 75,
      description: "Snowfall - Heavy intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 77,
      description: "Snow grains",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 80,
      description: "Rain showers - Slight intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 81,
      description: "Rain showers - Moderate intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 82,
      description: "Rain showers - Violent intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Rain.webp`,
    },
    {
      code: 85,
      description: "Snow showers - Slight intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 86,
      description: "Snow showers - Heavy intensity",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 95,
      description: "Thunderstorm - Slight or moderate",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 96,
      description: "Thunderstorm with slight hail",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Snow.webp`,
    },
    {
      code: 99,
      description: "Thunderstorm with heavy hail",
      imagePath: `../../../../public/assets/Images/WeatherIcons/${weatherHour}/${weatherHour}Thunder.webp`,
    },
  ];
  return weatherCodeDescriptions;
};
