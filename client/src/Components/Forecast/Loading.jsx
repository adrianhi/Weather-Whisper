import PropTypes from "prop-types";
import { GetCityByName } from "../../services/GetCityByName";
import { CurrentWeatherCard } from "./CurrentWeatherCard";
import { GetCurrentWeatherInformation } from "../../services/GetCurrentWeatherInformation";

export const Loading = () => {
  const { loading } = GetCityByName();
  const { data } = GetCurrentWeatherInformation();
  if (loading) {
    return <p>Loading...</p>;
  }
  return <CurrentWeatherCard  data={data} />;
};

Loading.propTypes = {
  DisplayWeatherData: PropTypes.any,
};
