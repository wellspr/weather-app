import localforage from "localforage";
import { useState } from "react";
import { Forecast } from "~/types/types";

type Cache = { 
    cacheTime: number; 
    locationName: string | undefined; 
    data: Forecast 
} | null;

export const useWeatherData = () => {

    const [forecast, setForecast] = useState<Forecast>(null);
    const [pastDays, setPastDays] = useState(0);
    const [forecastDays, setForecastDays] = useState(16);

    const fetchWeatherData = async (location:{latitude: number, longitude: number, name: string}) => {
        const key = `weather_data-${location.name.replace(/ /g, "_").toLocaleLowerCase()}`;
        const cache: Cache = await localforage.getItem(key);

        const fetchFreshData = async () => {
            const { latitude, longitude } = location;
            const url = encodeURI(`/api/forecast/?latitude=${latitude}&longitude=${longitude}&past_days=${pastDays}&forecast_days=${forecastDays}`);
            const response = await fetch(url);
            const data = await response.json();
            setForecast(data);

            const value: Cache = {
                cacheTime: new Date().getTime(),
                locationName: location.name,
                data,
            };

            localforage.setItem(key, value);
        };

        const isDataStale = (currentWeatherTime: string) => {
            const now = new Date();
            return (
                now.getDate() === new Date(currentWeatherTime).getDate() &&
                now.getHours() > new Date(currentWeatherTime).getHours()
            ) ||
            (
                now.getDate() > new Date(currentWeatherTime).getDate()
            );
        };

        if (cache && cache.data) {
            const currentWeatherTime = cache.data.current_weather.time;
            
            //check if data is stale 
            if (isDataStale(currentWeatherTime)) {
                console.log("Data is stale...");
                fetchFreshData();
            } else {
                console.log("Using cache: ", cache);
                setForecast(cache.data);
            }
        } else {
            fetchFreshData();
        }
    };

    return { forecast, fetchWeatherData };
};