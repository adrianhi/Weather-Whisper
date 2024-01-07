import PropTypes from "prop-types";
import { getWeatherDescriptionByCode } from "@services/GetWeatherDescriptionByCode";
import { CardImage } from "./CardImage";

export const CardHeader = ({ data }) => {
  const { description, imagePath } = getWeatherDescriptionByCode(
    data.current.weather_code,
    data.current.is_day
  );
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <div>
          <p className="text-4xl">{data.current.temperature_2m.toFixed()}°C</p>
        </div>
        <div className="my-2">
          <p className="text-sm"> {description}</p>
          <p>
            {" "}
            {`Feels like`}{" "}
            <span className="font-bold">{` ${data.current.apparent_temperature.toFixed()}°`}</span>
          </p>
        </div>
      </div>
      <CardImage imagePath={imagePath} />
    </div>
  );
};

CardHeader.propTypes = {
  data: PropTypes.any,
};
