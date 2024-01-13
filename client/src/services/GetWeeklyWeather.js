import UseFetch from "@hooks/UseFetch";

export const GetWeeklyWeather = () => {
    const { data } = UseFetch(
        "https://api.open-meteo.com/v1/forecast?latitude=18.4719&longitude=-69.8923&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT"    );

    return { data };
};