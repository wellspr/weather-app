import { FC, useEffect, useRef, useState } from "react";
import { useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { title } from "~/utils/transforms";
import { getWeekday } from "~/utils/weekdays";
import Carousel from "./Carousel";
import Regular from "~/icons/RegularIcons";
import WeatherIcon from "~/icons/WeatherIcon";

const DailyPreview: FC = () => {

    const { forecast } = useWeather();

    const [times, setTimes] = useState<string[]>([]);
    const [temperatures, setTemperatures] = useState<{ max: number[], min: number[], apparent_max: number[], apparent_min: number[] } | null>(null);
    const [weatherCodes, setWeatherCodes] = useState<number[]>([]);
    const [temperatureUnits, setTemperatureUnits] = useState<{ max: string, min: string, apparent_max: string, apparent_min: string } | null>(null);

    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (forecast) {
            const daily = forecast.daily;
            const units = forecast.daily_units;

            setTimes(daily.time);

            setTemperatures({
                max: daily.temperature_2m_max,
                min: daily.temperature_2m_min,
                apparent_max: daily.apparent_temperature_max,
                apparent_min: daily.apparent_temperature_min,
            });

            setWeatherCodes(forecast?.daily.weathercode);

            setTemperatureUnits({
                max: units.temperature_2m_max,
                min: units.temperature_2m_min,
                apparent_max: units.apparent_temperature_max,
                apparent_min: units.apparent_temperature_min,
            });
        }
    }, [forecast]);

    const renderDailyData = () => {
        return times.map((time, index) => {

            const date = new Date(time + "T00:00");

            return <li key={index} className="item">
                <h2 className="date">
                    {title(getWeekday(date.getDay()))}, {date.getDate()}
                </h2>

                <div className="temp temp-max">
                    <Regular icon="arrow-up" />
                    <div className="content">
                        <div className="temp__max">
                            <span className="temp__max__value">{temperatures?.max[index].toFixed(0)}</span>
                            <span className="temp__max__unit">{temperatureUnits?.max}</span>
                        </div>
                        <div className="temp__apparent-max">
                            <Regular icon="tilde" />
                            <span className="temp__apparent-max__value">{temperatures?.apparent_max[index].toFixed(0)}</span>
                            <span className="temp__apparent-max__unit">{temperatureUnits?.apparent_max}</span>
                        </div>
                    </div>
                </div>

                <div className="feature">
                    <WeatherIcon icon={`${currentIcons(weatherCodes[index], 1)}`} size={60} />

                    <p className="description">{weatherDescription(weatherCodes[index])}</p>
                </div>

                <div className="temp temp-min">
                    <Regular icon="arrow-down" />
                    <div className="content">
                        <div className="temp__min">
                            <span className="temp__max__value">{temperatures?.min[index].toFixed(0)}</span>
                            <span className="temp__max__unit">{temperatureUnits?.min}</span>
                        </div>
                        <div className="temp__apparent-min">
                            <Regular icon="tilde" />
                            <span className="temp__apparent-min__value">{temperatures?.apparent_min[index].toFixed(0)}</span>
                            <span className="temp__apparent-min__unit">{temperatureUnits?.apparent_min}</span>
                        </div>
                    </div>
                </div>
            </li>
        });
    };

    if (!forecast) {
        return (
            <div className="daily-preview loading">
                Loading weather...
            </div>
        );
    }

    return (
        <div className="daily-preview">
            <div className="heading">
                <p>{times.length}-Days Preview</p>
            </div>

            <Carousel name="daily" listRef={listRef}>
                <ul className="list" ref={listRef} >
                    {renderDailyData()}
                </ul>
            </Carousel>
        </div>
    );
};

export default DailyPreview;