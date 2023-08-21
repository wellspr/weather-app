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

    const fetchWeatherData = async (location:{latitude: number, longitude: number, name: string}) => {
        const key = `weather_data-${location.name.replace(/ /g, "_").toLocaleLowerCase()}`;
        const cache: Cache = await localforage.getItem(key, err => { console.log(err) });

        const fetchFreshData = async () => {
            const { latitude, longitude } = location;
            const url = encodeURI(`/api/forecast/?latitude=${latitude}&longitude=${longitude}`);
            const response = await fetch(url);
            const data = await response.json();
            setForecast(data);

            const value: Cache = {
                cacheTime: new Date().getTime(),
                locationName: location.name,
                data
            };

            localforage.setItem(key, value, (err) => { console.log(err) });
        };

        if (cache && cache.data) {
            console.log("Using cache: ", cache);

            //check if data is stale 
            const currentWeatherTime = cache.data.current_weather.time;

            if (
                (
                    new Date().getDate() === new Date(currentWeatherTime).getDate() &&
                    new Date().getHours() > new Date(currentWeatherTime).getHours()
                ) ||
                (
                    new Date().getDate() > new Date(currentWeatherTime).getDate()
                )
            ) {
                console.log("Data is stale...");
                fetchFreshData();
            } else {
                setForecast(cache.data);
            }
        } else {
            fetchFreshData();
        }
    };

    return { forecast, fetchWeatherData };
};