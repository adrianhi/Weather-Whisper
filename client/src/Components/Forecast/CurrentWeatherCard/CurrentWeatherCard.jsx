import PropTypes from "prop-types";
import { WeatherCardDescription } from "./WeatherCardDescription";
import { CardDate } from "./CardDate";
import { CardHeader } from "./CardHeader";
import useAos from "@hooks/useAos";

export const CurrentWeatherCard = ({ data, description, imagePath }) => {
  useAos();
  return (
    <div data-aos="flip-right" data-aos-duration="1000" className="bg-white  md:w-2/5 p-5 rounded-lg">
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
