import { GetCurrentDate } from "../../services/GetCurrentDate";

export const CardDate = () => {
  const { formattedDate, currentDay } = GetCurrentDate();

  return (
    <div>
      <p className="text-gray-400 text-xs font-roboto font-bold">
        {`${currentDay}, 
       ${formattedDate}
    `}
      </p>
    </div>
  );
};
