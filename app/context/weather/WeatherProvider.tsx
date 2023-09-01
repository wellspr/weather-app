import { FC, ReactNode } from "react";
import { WeatherContext } from "./WeatherContext";
import { useWeatherData } from "~/hooks/useWeatherData";

interface WeatherProviderProps {
    children: ReactNode
}

const WeatherProvider:FC <WeatherProviderProps> = ({ children }) => {

    return (
        <WeatherContext.Provider value={{
            ...useWeatherData(),
        }}>
            { children }
        </WeatherContext.Provider>
    )
};

export default WeatherProvider;