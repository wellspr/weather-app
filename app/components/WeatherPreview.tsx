import { FC } from "react";
import { Forecast, SelectedLocation } from "~/types/types";

interface WeatherPreviewProps {
    forecast: Forecast;
    selectedLocation: SelectedLocation;
}

const WeatherPreview: FC<WeatherPreviewProps> = ({ forecast, selectedLocation }) => {

    if (!forecast) return (
        <div>
            <p>Loading weather...</p>
        </div>
    );

    const currentWeather = forecast.current_weather;
    const hourlyUnits = forecast.hourly_units;
    const hourly = forecast.hourly;
    const dailyUnits = forecast.daily_units;
    const daily = forecast.daily;
    const currentDate = new Date(currentWeather.time)
    const currentHour = currentDate.getHours();

    return (
        <div className="weather-preview">
            <h2>Weather in: {selectedLocation?.name}, {selectedLocation?.country}</h2>
            <h3>Temperature: {currentWeather.temperature}{hourlyUnits.temperature_2m}</h3>
            <h4>Feels Like: {hourly.apparent_temperature[currentHour]}{hourlyUnits.apparent_temperature}</h4>
            <h4>Rain: {daily.precipitation_probability_mean[0]}{dailyUnits.precipitation_probability_mean}</h4>
            <div>{currentDate.toLocaleString()}</div>
        </div>
    );
};

export default WeatherPreview;