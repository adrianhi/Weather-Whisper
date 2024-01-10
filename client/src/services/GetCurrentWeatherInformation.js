import UseFetch from "@hooks/UseFetch";

export const GetCurrentWeatherInformation = () => {
  const { data } = UseFetch(
     "https://api.open-meteo.com/v1/forecast?latitude=18.4885&longitude=-69.8571&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto"
  );
  return { data };
};
