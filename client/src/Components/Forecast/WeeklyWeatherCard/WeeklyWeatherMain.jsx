import PropTypes from "prop-types";
import { WeatherDetails } from "./WeatherDetails";

export const WeeklyWeatherMain = ({ weeklyWeather, weeklyDesc }) => {

  return (
    <div
     
      className="p-3 md:flex items-center justify-center mx-auto  md:w-2/5 "
    >
      <WeatherDetails weeklyWeather={weeklyWeather} weeklyDesc={weeklyDesc} />
    </div>
  );
};

WeeklyWeatherMain.propTypes = {
  weeklyWeather: PropTypes.any,
  weeklyDesc: PropTypes.any,
};
