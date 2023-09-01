import { createContext } from "react";
import { WeatherType } from "./WeatherTypes";

const defaultValue: WeatherType = {
    forecast: null,
    fetchWeatherData: async () => {}
}

export const WeatherContext = createContext(defaultValue);