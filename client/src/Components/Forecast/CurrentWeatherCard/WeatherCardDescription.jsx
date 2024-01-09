import PropTypes from "prop-types";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export const WeatherCardDescription = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <p className="text-gray-400  font-roboto">t° max,min</p>
        <div className="flex ">
          <div className="flex ">
            <FaLongArrowAltUp className="mt-1" />
            <span className=" font-roboto">
              {`${data.daily.temperature_2m_max[0].toFixed()}° `}
            </span>
          </div>
          <div className="flex ">
            <FaLongArrowAltDown className="mt-1" />

            <span className=" font-roboto">{`${data.daily.temperature_2m_min[0].toFixed()}° `}</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-400 font-roboto">UV index</p>
        <span>{`${data.daily.uv_index_max[0].toFixed()}° `}</span>
      </div>
      <div>
        <p className="text-gray-400 font-roboto">Pressure</p>
        <span>{`${data.current.surface_pressure.toFixed()} mmHg`} </span>
      </div>
      <div>
        <p className="text-gray-400 font-roboto">Precipitation</p>
        <span>{`${data.current.precipitation}% `} </span>
      </div>

      <div>
        <p className="text-gray-400 font-roboto">Humidity</p>
        <span>{`${data.current.relative_humidity_2m}% `} </span>
      </div>
      <div>
        <p className="text-gray-400 font-roboto">Wind speed</p>
        <span>{`${data.current.wind_speed_10m.toFixed()}km/h `} </span>
      </div>
    </div>
  );
};

WeatherCardDescription.propTypes = {
  data: PropTypes.any,
};
