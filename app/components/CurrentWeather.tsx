import { FC } from "react";
import { useLocation, useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { SelectedLocation } from "~/types/types";
import { getMonth } from "~/utils/months";
import { title } from "~/utils/transforms";
import Regular from "~/icons/RegularIcons";
import WeatherIcon from "~/icons/WeatherIcon";
import { Icon } from "~/icons/WeatherIcon/types";

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
    currentIcon: Icon,
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

const WeatherCard: FC<{ weatherData: WeatherDataType }> = ({ weatherData }) => {

    const { fetchWeatherData } = useWeather();

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
                        <WeatherIcon icon={`${weatherData.currentIcon}`} size={100} />
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
                        <WeatherIcon icon="wi-thermometer" size={30} />
                        Feels Like: {weatherData.apparentTemperature.toFixed(0)}{weatherData.apparentTemperatureUnit}
                    </div>
                }

                {
                    weatherData &&
                    <div className="feature">
                        <WeatherIcon icon="wi-raindrops" size={35} />
                        PoP: {weatherData.precipitationProbability}{weatherData.precipitationProbabilityUnit}
                    </div>
                }

                {
                    weatherData &&
                    <div className="feature windspeed">
                        <WeatherIcon icon="wi-strong-wind" size={25} />
                        Windspeed: {weatherData.windSpeed}{weatherData.windSpeedUnit}
                    </div>
                }
            </div>

            <div className={weatherData ? "sun" : "sun loading"}>
                {
                    weatherData &&
                    <div className="sun__rise">
                        <WeatherIcon icon="wi-sunrise" size={30} />
                        <span>Sunrise {weatherData.sunRiseTime.toLocaleTimeString()} hr</span>
                    </div>
                }

                {
                    weatherData &&
                    <div className="sun__set">
                        <WeatherIcon icon="wi-sunset" size={30} />
                        <span>Sunset {weatherData.sunSetTime.toLocaleTimeString()} hr</span>
                    </div>
                }
            </div>

            {
                weatherData &&
                <div className={weatherData ? "update-info" : "update-info loading"}>
                    <span>Last updated: {weatherData.currentDate.toLocaleString()}</span>
                    <button
                        className="button"
                        onClick={() => {
                            if (weatherData && weatherData.selectedLocation) {
                                const latitude = weatherData.selectedLocation.latitude;
                                const longitude = weatherData.selectedLocation.longitude;
                                const name = weatherData.selectedLocation.name;

                                fetchWeatherData({
                                    latitude: latitude,
                                    longitude: longitude,
                                    name: name
                                });
                            }
                        }}>
                        <Regular icon="refresh" />
                    </button>
                </div>
            }
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