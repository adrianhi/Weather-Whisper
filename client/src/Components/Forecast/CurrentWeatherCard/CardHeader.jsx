import PropTypes from "prop-types";
import { getWeatherDescriptionByCode } from "@services/GetWeatherDescriptionByCode";
import { CardImage } from "./CardImage";

export const CardHeader = ({ data }) => {
  const { description, imagePath } = getWeatherDescriptionByCode(
    data.current.weather_code,
    data.current.is_day
  );
  return (
    <div className="grid grid-cols-2   gap-x-24">
      <div className="md:mt-14 md:ml-14 mt-5">
        <div>
          <p className="text-4xl font-roboto ">
            {data.current.temperature_2m.toFixed()}°C
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm font-roboto "> {description}</p>
          <p>
            {" "}
            {`Feels like`}{" "}
            <span className=" font-roboto font-bold">{` ${data.current.apparent_temperature.toFixed()}°`}</span>
          </p>
        </div>
      </div>
      <div>
        <CardImage imagePath={imagePath} styles={"h-4/5 "} />
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  data: PropTypes.any,
};
