import { GetCityByName } from "@services/GetCityByName";
import { GetCurrentWeatherInformation } from "@services/GetCurrentWeatherInformation";
import { GetWeeklyWeather } from "@services/GetWeeklyWeather";
import { Forecast } from "./Forecast";
import { getWeatherDescriptionByCode } from "@utils/GetWeatherDescriptionByCode";

export const Loading = () => {
  const { loading, cityName } = GetCityByName();
  const { data } = GetCurrentWeatherInformation();
  const { data: weeklyWeather } = GetWeeklyWeather();

  if (loading) {
    return (
      <div className="h-screen w-screen flex mx-auto justify-center items-center">
        <h1>Loading ...</h1>
      </div>
    );
  }

  const { description, imagePath, containsKeyword } =
    getWeatherDescriptionByCode(data.current.weather_code, data.current.is_day);

    const weeklyDesc = weeklyWeather.daily.weather_code.map(code => {
      const { description } = getWeatherDescriptionByCode(code);
      return description;
    });

  return data ? (
    <Forecast
      data={data}
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
};
