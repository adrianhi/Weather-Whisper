import { GetCityByName } from "@services/GetCityByName";
import { GetCurrentWeatherInformation } from "@services/GetCurrentWeatherInformation";
import { GetWeeklyWeather } from "@services/GetWeeklyWeather";
import Forecast from "./Forecast";
import { getWeatherDescriptionByCode } from "@utils/GetWeatherDescriptionByCode";

export default function Loading() {
  const { loading, cityName } = GetCityByName();
  const { data: currentWeather } = GetCurrentWeatherInformation();
  const { data: weeklyWeather } = GetWeeklyWeather();
  if (loading) {
    return (
      <div className="h-screen w-screen flex mx-auto justify-center items-center">
        <h1>Loading ...</h1>
      </div>
    );
  }

  const { description, imagePath, containsKeyword } =
    getWeatherDescriptionByCode(
      currentWeather.current.weather_code,
      currentWeather.current.is_day
    );

  const weeklyDesc = weeklyWeather.daily.weather_code.map((code) => {
    const { description: description2, imagePath: imagePath2 } =
      getWeatherDescriptionByCode(code);
    return { description2, imagePath2 };
  });

  return currentWeather ? (
    <Forecast
      data={currentWeather}
      weeklyWeather={weeklyWeather}
      weeklyDesc={weeklyDesc}
      description={description}
      imagePath={imagePath}
      cityName={cityName}
      containsKeyword={containsKeyword}
    />
  ) : (
    <p>No data available</p>
  );
}
