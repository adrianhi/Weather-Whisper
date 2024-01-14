import PropTypes from "prop-types";
import { format } from "date-fns";
import { WeeklyTemperatures } from "./WeeklyTemperatures";
import { CardImage } from "../CurrentWeatherCard/CardImage";

const formatDate = (dateString) => {
  const date = new Date(`${dateString}T00:00:00Z`);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  return format(date, "EEE, d MMMM");
};

export const WeatherDetails = ({ weeklyWeather, weeklyDesc }) => {
  return (
    <div>
      {weeklyWeather.daily.time.map((time, index) => (
        <div className="p-2 flex justify-between items-center" key={index}>
          <div className="flex p-2">
            <CardImage
              imagePath={weeklyDesc?.[index]?.imagePath2}
              styles="w-24 bg-white rounded-lg"
            />

            <div className="ml-2">
              <p className="text-black-400 text-lg font-roboto font-bold">
                {formatDate(time)}
              </p>
              <p className="text-gray-400 text-base font-roboto font-bold">
                {weeklyDesc?.[index]?.description2}
              </p>
            </div>
          </div>
          <div className="ml-32">
            <WeeklyTemperatures
              weeklyWeather={weeklyWeather}
              dayIndex={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

WeatherDetails.propTypes = {
  weeklyWeather: PropTypes.any,
  weeklyDesc: PropTypes.any,
};
