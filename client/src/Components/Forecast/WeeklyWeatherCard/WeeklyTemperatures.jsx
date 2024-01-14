import PropTypes from "prop-types";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export const WeeklyTemperatures = ({ weeklyWeather, dayIndex }) => {
  const tempMax = weeklyWeather.daily.temperature_2m_max[dayIndex];
  const tempMin = weeklyWeather.daily.temperature_2m_min[dayIndex];

  return (
    <div>
      <p className="text-gray-400 font-roboto">t° max,min</p>
      <div className="flex">
        <div className="flex">
          <FaLongArrowAltUp className="mt-1" />
          <span className="font-roboto">{`${tempMax.toFixed()}° `}</span>
        </div>
        <div className="flex">
          <FaLongArrowAltDown className="mt-1" />
          <span className="font-roboto">{`${tempMin.toFixed()}° `}</span>
        </div>
      </div>
    </div>
  );
};

WeeklyTemperatures.propTypes = {
  weeklyWeather: PropTypes.any,
  dayIndex: PropTypes.number,
};
