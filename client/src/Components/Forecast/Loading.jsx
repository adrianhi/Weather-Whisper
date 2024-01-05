import PropTypes from "prop-types";
import { GetCityByName } from "../../services/GetCityByName";
import { CurrentWeather } from "./CurrentWeather";
import { GetCurrentWeatherInformation } from "../../services/GetCurrentWeatherInformation";

export const Loading = () => {
  const { loading, cityName } = GetCityByName();
  const { data } = GetCurrentWeatherInformation();
  if (loading) {
    return <p>Loading...</p>;
  }
  return <CurrentWeather cityName={cityName} data={data} />;
};

Loading.propTypes = {
  DisplayWeatherData: PropTypes.any,
};
