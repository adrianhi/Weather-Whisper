import PropTypes from "prop-types";
import { WeatherCardDescription } from "./WeatherCardDescription";
import { CardDate } from "./CardDate";
import { CardHeader } from "./CardHeader";
export const CurrentWeatherCard = ({ data, description, imagePath }) => {
  return (
    <div className="bg-white  md:w-2/5 p-5 rounded-lg">
      <CardDate />
      <div className="my-2">
        <CardHeader
          data={data}
          description={description}
          imagePath={imagePath}
        />
        <div>
          <WeatherCardDescription data={data} />
        </div>
      </div>
    </div>
  );
};

CurrentWeatherCard.propTypes = {
  data: PropTypes.any,
  description: PropTypes.string,
  imagePath: PropTypes.string,
};
