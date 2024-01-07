import UseFetch from "@hooks/UseFetch";

export const GetCityByName = () => {
  const { data, loading } = UseFetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=Santo+Domingo&count=1&language=en&format=json"
  );
  const city = data && data.results && data.results[0];
  const cityName = city && city.name;

  return { cityName, loading };
};
