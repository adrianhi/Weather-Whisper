import PropTypes from "prop-types";
import { CurrentWeatherCard } from "@components/Forecast/CurrentWeatherCard/CurrentWeatherCard";
import { Warning } from "@components/Forecast/Warning/Warning";

export const Forecast = ({
  data,
  cityName,
  description,
  imagePath,
  containsKeyword,
}) => {
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
      {containsKeyword && (
        <div className="md:flex items-center justify-center mx-auto">
          <Warning />
        </div>
      )}
    </div>
  );
};

Forecast.propTypes = {
  data: PropTypes.any,
  cityName: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
  containsKeyword: PropTypes.bool,
};
