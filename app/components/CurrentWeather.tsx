import { FC } from "react";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { Forecast, SelectedLocation } from "~/types/types";
import { getMonth } from "~/utils/months";
import { title } from "~/utils/transforms";

interface WeatherPreviewProps {
    forecast: Forecast;
    selectedLocation: SelectedLocation;
}

const CurrentWeather: FC<WeatherPreviewProps> = ({ forecast, selectedLocation }) => {

    if (!forecast) return (
        <div>
            <p>Loading weather...</p>
        </div>
    );

    const currentWeather = forecast.current_weather;

    const currentDate = new Date(currentWeather.time);
    const currentHour = currentDate.getHours();
    const currentDateString = `${currentDate.getDate()} ${title(getMonth(currentDate.getMonth())).slice(0, 3)} ${currentDate.getFullYear()}`;
    const weatherCode = currentWeather.weathercode;

    const hourly = forecast.hourly;
    const hourlyUnits = forecast.hourly_units;

    const apparentTemperature = hourly.apparent_temperature[currentHour];
    const precipitationProbability = hourly.precipitation_probability[currentHour];
    const windSpeed = hourly.windspeed_10m[0];

    const apparentTemperatureUnit = hourlyUnits.apparent_temperature;
    const precipitationProbabilityUnit = hourlyUnits.precipitation_probability;
    const windSpeedUnit = hourlyUnits.windspeed_10m;

    const daily = forecast.daily;
    const dailyUnits = forecast.daily_units;

    const sunRiseTime = new Date(daily.sunrise[0]);
    const sunSetTime = new Date(daily.sunset[0]);

    const isDay = currentWeather.is_day;

    const currentIcon = currentIcons(weatherCode, isDay);

    return (
        <div className="current-weather">
            <div className="header">
                <div className="datestring"> Today ( {currentDateString} ) </div>

                <h2 className="location">
                    {selectedLocation?.name}, {selectedLocation?.country}
                </h2>
            </div>

            <div className="main">
                <div className="feature">
                    <h3 className="temp">
                        <span className="temp__value">
                            {currentWeather.temperature.toFixed(0)}
                        </span>
                        <span className="temp__unit">
                            {hourlyUnits.temperature_2m}
                        </span>
                    </h3>

                    <img
                        className="icon"
                        src={`icons/wi/${currentIcon}.svg`}
                        alt="weather icon"
                        width="100px"
                        onMouseOver={() => console.log(currentIcon)}
                    />
                </div>

                <div className="description">{weatherDescription(weatherCode)}</div>
            </div>

            <div className="minor">
                <div className="feature">
                    <img src="icons/wi/wi-thermometer.svg" alt="feels like" width="30px" />
                    Feels Like: {apparentTemperature.toFixed(0)}{apparentTemperatureUnit}
                </div>

                <div className="feature">
                    <img src="icons/wi/wi-raindrops.svg" alt="precipitation" width="35px" />
                    PoP: {precipitationProbability}{precipitationProbabilityUnit}
                </div>

                <div className="feature windspeed">
                    <img src="icons/wi/wi-strong-wind.svg" alt="wind speed" width="25px" />
                    Windspeed: {windSpeed}{windSpeedUnit}
                </div>
            </div>

            <div className="sun">
                <div className="sun__rise">
                    <img src="icons/wi/wi-sunrise.svg" alt="sunrise" width="30px" />
                    <span>Sunrise {sunRiseTime.toLocaleTimeString()} hr</span>
                </div>
                <div className="sun__set">
                    <img src="icons/wi/wi-sunset.svg" alt="sunset" width="30px" />
                    <span>Sunset {sunSetTime.toLocaleTimeString()} hr</span>
                </div>
            </div>

            <span>Last updated: {currentDate.toLocaleString()}</span>
        </div>
    );
};

export default CurrentWeather;