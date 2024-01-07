import PropTypes from "prop-types";
import { WeatherCardDescription } from "./WeatherCardDescription";
import { CardDate } from "./CardDate";
import { CardHeader } from "./CardHeader";
export const CurrentWeatherCard = ({ data }) => {
  return (
    <div className="bg-white  p-5 rounded-lg">
      <CardDate />
      <div className="my-2">
        <CardHeader data={data} />
        <div>
          <WeatherCardDescription data={data} />
        </div>
      </div>
    </div>
  );
};

CurrentWeatherCard.propTypes = {
  data: PropTypes.any,
};
