import { Forecast } from "~/types/types";

export type WeatherType = {
    forecast: Forecast;
    fetchWeatherData: (location: {
        latitude: number;
        longitude: number;
        name: string;
    }) => Promise<void>
};