import UseFetch from "../Hooks/UseFetch";

export const GetCurrentWeatherInformation = () => {
  const { data } = UseFetch(
    "https://api.open-meteo.com/v1/forecast?latitude=18.4719&longitude=-69.8923&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,wind_speed_10m,wind_direction_10m"
  );

  return { data };
};
