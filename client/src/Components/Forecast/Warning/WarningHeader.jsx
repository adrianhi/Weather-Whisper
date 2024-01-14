import { IoWarningOutline } from "react-icons/io5";

export const WarningHeader = () => {
  return (
    <div className="flex text-lg">
      <div className="mr-2 flex items-center">
        <IoWarningOutline size={25} className="text-warningColor   " />
      </div>
      <div>
        <span className="text-warningColor font-bold">Warning</span>
      </div>
    </div>
  );
};
