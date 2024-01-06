import PropTypes from "prop-types";
import { getWeatherDescriptionByCode } from "../../services/GetWeatherDescriptionByCode";

export const CardHeader = ({ data }) => {
  const weatherDescription = getWeatherDescriptionByCode(
    data.current.weather_code
  );
  return (
    <div>
      <div>
        <p className="text-4xl">{data.current.temperature_2m.toFixed()}°C</p>
      </div>
      <div className="my-2">
        <p className="text-sm"> {weatherDescription}</p>
        <p>
          {" "}
          {`Feels like`}{" "}
          <span className="font-bold">{` ${data.current.apparent_temperature.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  data: PropTypes.any,
};
