import PropTypes from "prop-types";
import { WarningHeader } from "./WarningHeader";
export const Warning = ({ data }) => {
  return (
    <div className="bg-white  md:w-2/5 p-5 rounded-lg my-5">
      <WarningHeader />
      <div className="grid grid-cols-2">
        <div>
          <span className="text-gray-400  font-roboto">Rain</span>
        </div>
        <div>
          <span className="text-gray-400  font-roboto">Exp.Time</span>
        </div>
        <div>
          <span className="font-roboto">{data.current.rain} Inch</span>
        </div>
        <div>
          <span className="font-roboto">
            {data.daily.precipitation_hours[0]}h
          </span>
        </div>
      </div>
    </div>
  );
};
Warning.propTypes = {
  data: PropTypes.any,
};
