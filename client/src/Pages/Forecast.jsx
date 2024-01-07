import { GetCityByName } from "@services/GetCityByName";
import { Loading } from "./Loading";
export const Forecast = () => {
  const { cityName } = GetCityByName();
  return (
    <div className="bg-custom p-3   h-screen">
      <div>
        <p className="font-roboto font-bold md:text-3xl my-2 text-lg">
          {cityName}
        </p>
      </div>
      <div className="md:flex items-center justify-center mx-auto">
        <Loading />
      </div>
    </div>
  );
};
