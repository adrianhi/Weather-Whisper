import { GetCityByName } from "@services/GetCityByName";
import { Loading } from "./Loading";
export const Forecast = () => {
  const { cityName } = GetCityByName();
  return (
    <div className="bg-gray-200 p-3   h-screen">
      <div>
        <p className="font-roboto font-bold my-2 text-lg">{cityName}</p>
      </div>
      <div>
        <Loading />
      </div>
    </div>
  );
};
