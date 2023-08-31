import { FC, useEffect, useRef, useState } from "react";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { Forecast } from "~/types/types";
import { title } from "~/utils/transforms";
import { getWeekday } from "~/utils/weekdays";

interface DailyPreviewProps {
    forecast: Forecast;
}

const DailyPreview: FC<DailyPreviewProps> = ({ forecast }) => {

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

    useEffect(() => {
        listRef.current?.scroll({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <div className="daily-preview">
            <div className="heading">
                <p>{times.length}-Days Preview</p>
            </div>

            <div className="daily-carousel">
                <button
                    className="button button-navigation button-navigation__left"
                    onClick={() => {
                        if (listRef.current) {
                            const width = listRef.current.getBoundingClientRect().width;
                            let left = listRef.current.scrollLeft - width;

                            listRef.current.scroll({
                                top: 0,
                                left,
                                behavior: "smooth",
                            });
                        }
                    }}
                ><img src="icons/regular/caret-left.svg" alt="left arrow" /></button>
                <ul className="list" ref={listRef} >
                    {
                        times.map((time, index) => {
                            //if (index === 0) return null;

                            const date = new Date(time + "T00:00");

                            return <li key={index} className="item">
                                <h2 className="date">
                                    {title(getWeekday(date.getDay()))}, {date.getDate()}
                                </h2>

                                <div className="temp">
                                    <div className="icon">
                                        <img src="icons/regular/arrow-up.svg" alt="arrow up" width="20px" />
                                    </div>
                                    <div className="content">
                                        <div className="temp__max">
                                            <span className="temp__max__value">{temperatures?.max[index].toFixed(0)}</span>
                                            <span className="temp__max__unit">{temperatureUnits?.max}</span>
                                        </div>
                                        <div className="temp__apparent-max">
                                            <img src="icons/regular/tilde.svg" alt="tilde" width="20px" />
                                            <span className="temp__apparent-max__value">{temperatures?.apparent_max[index].toFixed(0)}</span>
                                            <span className="temp__apparent-max__unit">{temperatureUnits?.apparent_max}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature">
                                    <img
                                        src={`icons/wi/${currentIcons(weatherCodes[index], 1)}.svg`}
                                        alt="icon"
                                        width="60px"
                                    />

                                    <p className="description">{weatherDescription(weatherCodes[index])}</p>
                                </div>

                                <div className="temp">
                                    <div className="icon">
                                        <img src="icons/regular/arrow-down.svg" alt="arrow down" width="20px" />
                                    </div>
                                    <div className="content">
                                        <div className="temp__min">
                                            <span className="temp__max__value">{temperatures?.min[index].toFixed(0)}</span>
                                            <span className="temp__max__unit">{temperatureUnits?.min}</span>
                                        </div>
                                        <div className="temp__apparent-min">
                                            <img src="icons/regular/tilde.svg" alt="tilde" width="20px" />
                                            <span className="temp__apparent-min__value">{temperatures?.apparent_min[index].toFixed(0)}</span>
                                            <span className="temp__apparent-min__unit">{temperatureUnits?.apparent_min}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
                <button
                    className="button button-navigation button-navigation__right"
                    onClick={() => {
                        if (listRef.current) {
                            const width = listRef.current.getBoundingClientRect().width;
                            let left = listRef.current.scrollLeft + width;

                            listRef.current.scroll({
                                top: 0,
                                left,
                                behavior: "smooth",
                            });
                        }
                    }}
                ><img src="icons/regular/caret-right.svg" alt="right arrow" /></button>
            </div>
        </div>
    );
};

export default DailyPreview;