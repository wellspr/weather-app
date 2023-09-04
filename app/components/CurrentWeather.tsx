import { FC } from "react";
import { useLocation, useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { SelectedLocation } from "~/types/types";
import { getMonth } from "~/utils/months";
import { title } from "~/utils/transforms";

type CurrentWeather = {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
}

type WeatherDataType = {
    currentDateString: string,
    selectedLocation: SelectedLocation,
    currentWeather: CurrentWeather,
    temperatureUnit: string,
    currentIcon: string,
    weatherCode: number,
    apparentTemperature: number,
    apparentTemperatureUnit: string,
    precipitationProbability: number,
    precipitationProbabilityUnit: string,
    windSpeed: number,
    windSpeedUnit: string,
    sunRiseTime: Date,
    sunSetTime: Date,
    currentDate: Date,
} | null;

const WeatherCard = ({ weatherData }: { weatherData: WeatherDataType }) => {
    return (
        <div className={weatherData ? `current-weather` : `current-weather loading`}>
            <div className={weatherData ? "header" : "header loading"}>
                {
                    weatherData &&
                    <div className="datestring"> Today ( {weatherData.currentDateString} ) </div>
                }

                {
                    weatherData &&
                    <h2 className="location">
                        {weatherData.selectedLocation?.name}, {weatherData.selectedLocation?.country}
                    </h2>
                }
            </div>

            <div className={weatherData ? "main" : "main loading"}>
                <div className="feature">
                    <h3 className="temp">
                        {
                            weatherData &&
                            <span className="temp__value">
                                {weatherData.currentWeather.temperature.toFixed(0)}
                            </span>
                        }

                        {
                            weatherData &&
                            <span className="temp__unit">
                                {weatherData.temperatureUnit}
                            </span>
                        }
                    </h3>

                    {
                        weatherData &&
                        <img
                            className="icon"
                            src={`icons/wi/${weatherData.currentIcon}.svg`}
                            alt="weather icon"
                            width="100px"
                            onMouseOver={() => console.log(weatherData.currentIcon)}
                        />
                    }
                </div>
                {
                    weatherData &&
                    <div className="description">{weatherDescription(weatherData.weatherCode)}</div>
                }
            </div>

            <div className={weatherData ? "minor" : "minor loading"}>
                {
                    weatherData &&
                    <div className="feature">
                        <img src="icons/wi/wi-thermometer.svg" alt="feels like" width="30px" style={{ minWidth: "30px" }} />
                        Feels Like: {weatherData.apparentTemperature.toFixed(0)}{weatherData.apparentTemperatureUnit}
                    </div>
                }

                {
                    weatherData &&
                    <div className="feature">
                        <img src="icons/wi/wi-raindrops.svg" alt="precipitation" width="35px" style={{ minWidth: "35px" }} />
                        PoP: {weatherData.precipitationProbability}{weatherData.precipitationProbabilityUnit}
                    </div>
                }

                {
                    weatherData &&
                    <div className="feature windspeed">
                        <img src="icons/wi/wi-strong-wind.svg" alt="wind speed" width="25px" style={{ minWidth: "25px" }} />
                        Windspeed: {weatherData.windSpeed}{weatherData.windSpeedUnit}
                    </div>
                }
            </div>

            <div className={weatherData ? "sun" : "sun loading"}>
                {
                    weatherData &&
                    <div className="sun__rise">
                        <img src="icons/wi/wi-sunrise.svg" alt="sunrise" width="30px" style={{ minWidth: "30px" }} />
                        <span>Sunrise {weatherData.sunRiseTime.toLocaleTimeString()} hr</span>
                    </div>
                }

                {
                    weatherData &&
                    <div className="sun__set">
                        <img src="icons/wi/wi-sunset.svg" alt="sunset" width="30px" style={{ minWidth: "30px" }} />
                        <span>Sunset {weatherData.sunSetTime.toLocaleTimeString()} hr</span>
                    </div>
                }
            </div>

            <div className={weatherData ? "update-info" : "update-info loading"}>
                {
                    weatherData &&
                    <span>Last updated: {weatherData.currentDate.toLocaleString()}</span>
                }
            </div>
        </div>
    );
};

const CurrentWeather: FC = () => {

    const { selectedLocation } = useLocation();

    const { forecast } = useWeather();

    if (!forecast) return <WeatherCard weatherData={null} />;

    const currentWeather = forecast?.current_weather;

    const currentDate = new Date(currentWeather.time);
    const currentHour = currentDate.getHours();
    const currentDateString = `${currentDate.getDate()} ${title(getMonth(currentDate.getMonth())).slice(0, 3)} ${currentDate.getFullYear()}`;
    const weatherCode = currentWeather.weathercode;

    const hourly = forecast.hourly;
    const hourlyUnits = forecast.hourly_units;

    const apparentTemperature = hourly.apparent_temperature[currentHour];
    const precipitationProbability = hourly.precipitation_probability[currentHour];
    const windSpeed = hourly.windspeed_10m[0];

    const temperatureUnit = hourlyUnits.temperature_2m;
    const apparentTemperatureUnit = hourlyUnits.apparent_temperature;
    const precipitationProbabilityUnit = hourlyUnits.precipitation_probability;
    const windSpeedUnit = hourlyUnits.windspeed_10m;

    const daily = forecast.daily;
    const dailyUnits = forecast.daily_units;

    const sunRiseTime = new Date(daily.sunrise[0]);
    const sunSetTime = new Date(daily.sunset[0]);

    const isDay = currentWeather.is_day;

    const currentIcon = currentIcons(weatherCode, isDay);

    const weatherData = {
        currentDateString,
        selectedLocation,
        currentWeather,
        temperatureUnit,
        currentIcon,
        weatherCode,
        apparentTemperature,
        apparentTemperatureUnit,
        precipitationProbability,
        precipitationProbabilityUnit,
        windSpeed,
        windSpeedUnit,
        sunRiseTime,
        sunSetTime,
        currentDate,
    };

    return (
        <WeatherCard weatherData={weatherData} />
    );
};

export default CurrentWeather;