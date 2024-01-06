import { format } from "date-fns";

export const GetCurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM d, yyyy");
  const currentDay = format(currentDate, "EEEE");

  return { formattedDate,currentDay}
};

