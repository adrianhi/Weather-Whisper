import { CurrentWeatherCard } from "@components/Forecast/CurrentWeatherCard/CurrentWeatherCard";
import PropTypes from "prop-types";

export const Forecast = ({ data, cityName, description, imagePath }) => {
  return (
    <div className="bg-custom p-3   h-screen">
      <div>
        <p className="font-roboto font-bold md:text-3xl my-2 text-lg">
          {cityName}
        </p>
      </div>
      <div className="md:flex items-center justify-center mx-auto">
        <CurrentWeatherCard
          data={data}
          description={description}
          imagePath={imagePath}
        />
      </div>
    </div>
  );
};

Forecast.propTypes = {
  data: PropTypes.any,
  cityName: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
};
