import PropTypes from "prop-types";
import { GetCityByName } from "@services/GetCityByName";
import { CurrentWeatherCard } from "@components/Forecast/CurrentWeatherCard/CurrentWeatherCard";
import { GetCurrentWeatherInformation } from "@services/GetCurrentWeatherInformation";

export const Loading = () => {
  const { loading } = GetCityByName();
  const { data } = GetCurrentWeatherInformation();
  if (loading) {
    return (
      <div className="h-screen w-screen flex mx-auto justify-center items-center">
        <h1>Loading ...</h1>
      </div>
    );
  }
  return <CurrentWeatherCard data={data} />;
};

Loading.propTypes = {
  DisplayWeatherData: PropTypes.any,
};
