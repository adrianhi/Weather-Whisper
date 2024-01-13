import PropTypes from "prop-types";
import { format } from "date-fns";

const formatDate = (dateString) => {
  const date = new Date(`${dateString}T00:00:00Z`);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  return format(date, "EEE, d MMMM");
};

export const WeatherDetails = ({ weeklyWeather, weeklyDesc }) => {
  return (
    <div className="box-content h-15 w-25 p-4">
      {weeklyWeather.daily.time.map((time, index) => (
        <div className="box-content h-10 w-24 py-px my-1" key={index}>
          <p className="text-black-400 text-xs font-roboto font-bold">
            {formatDate(time)}
          </p>
          <p className="text-gray-400 text-xs font-roboto font-bold">
            {weeklyDesc?.[index]}
          </p>
        </div>
      ))}
    </div>
  );
};

WeatherDetails.propTypes = {
  weeklyWeather: PropTypes.any,
  weeklyDesc: PropTypes.any,
};
