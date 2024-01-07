import PropTypes from "prop-types";

export const WeatherCardDescription = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <p className="text-gray-400">t° max,min</p>
        <span>{`${data.daily.temperature_2m_max[0].toFixed()}° `}</span>
        <span>{`${data.daily.temperature_2m_min[0].toFixed()}° `}</span>
      </div>
      <div>
        <p className="text-gray-400">UV index</p>
        <span>{`${data.daily.uv_index_max[0].toFixed()}° `}</span>
      </div>
      <div>
        <p className="text-gray-400">Pressure</p>
        <span>{`${data.current.surface_pressure.toFixed()} mmHg`} </span>
      </div>
      <div>
        <p className="text-gray-400">Precipitation</p>
        <span>{`${data.current.precipitation}% `} </span>
      </div>

      <div>
        <p className="text-gray-400">Humidity</p>
        <span>{`${data.current.relative_humidity_2m}% `} </span>
      </div>
      <div>
        <p className="text-gray-400">Wind speed</p>
        <span>{`${data.current.wind_speed_10m.toFixed()}km/h `} </span>
      </div>
    </div>
  );
};

WeatherCardDescription.propTypes = {
  data: PropTypes.any,
};
