import { FC, useEffect, useState } from "react";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { Forecast } from "~/types/types";

interface DailyPreviewProps {
    forecast: Forecast;
}

const DailyPreview: FC<DailyPreviewProps> = ({ forecast }) => {

    const [times, setTimes] = useState<string[]>([]);
    const [temperatures, setTemperatures] = useState<{ max: number[], min: number[], apparent_max: number[], apparent_min: number[] } | null>(null);
    const [weatherCodes, setWeatherCodes] = useState<number[]>([]);
    const [temperatureUnits, setTemperatureUnits] = useState<{ max: string, min: string, apparent_max: string, apparent_min: string } | null>(null);

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
            })
        }
    }, [forecast]);

    return (
        <div className="daily-preview">
            <p>{times.length}-Days Preview</p>

            <ul className="list">
                {
                    times.map((time, index) => {
                        if (index === 0) return null;

                        return <li key={index} className="item">
                            <p>{time}</p>

                            <div className="temp">
                                <div className="icon">
                                    <img src="icons/regular/arrow-up.svg" alt="arrow up" width="20px" />
                                </div>
                                <div className="content">
                                    <div className="temp__max">{temperatures?.max[index].toFixed(0)}{temperatureUnits?.max}</div>
                                    <div className="temp__apparent-max">
                                        <img src="icons/regular/tilde.svg" alt="tilde" width="20px" />
                                        {temperatures?.apparent_max[index].toFixed(0)}{temperatureUnits?.apparent_max}
                                    </div>
                                </div>
                            </div>

                            <div className="temp__divider">
                                <img src="icons/regular/separator.svg" alt="separator" width="20px" />
                            </div>

                            <div className="temp">
                                <div className="icon">
                                    <img src="icons/regular/arrow-down.svg" alt="arrow down" width="20px" />
                                </div>
                                <div className="content">
                                    <div className="temp__min">{temperatures?.min[index].toFixed(0)}{temperatureUnits?.min}</div>
                                    <div className="temp__apparent-min">
                                        <img src="icons/regular/tilde.svg" alt="tilde" width="20px" />
                                        {temperatures?.apparent_min[index].toFixed(0)}{temperatureUnits?.apparent_min}
                                    </div>
                                </div>
                            </div>

                            <img
                                src={`icons/wi/${currentIcons(weatherCodes[index], 1)}.svg`}
                                alt="icon"
                                width="50px"
                            />
                            <p className="description">{weatherDescription(weatherCodes[index])}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default DailyPreview;