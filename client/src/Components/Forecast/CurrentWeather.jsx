import PropTypes from "prop-types";

export const CurrentWeather = ({ cityName, data }) => {
  return (
    <div>
      <p>{cityName}</p>
      <p>Time: {data.current.time}</p>
      <p>Temperature: {data.current.temperature_2m} °C</p>
      <p>Relative Humidity: {data.current.relative_humidity_2m} %</p>
      <p>Apparent Temperature: {data.current.apparent_temperature} °C</p>
      <p>Precipitation: {data.current.precipitation} mm</p>
      <p>Wind Speed: {data.current.wind_speed_10m} km/h</p>
      <p>Wind Direction: {data.current.wind_direction_10m} °</p>
    </div>
  );
};

CurrentWeather.propTypes = {
  cityName: PropTypes.any,
  data: PropTypes.any,
};
