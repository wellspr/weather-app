import { FC, useEffect, useRef, useState } from "react";
import { useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { title } from "~/utils/transforms";
import { getWeekday } from "~/utils/weekdays";
import Carousel from "./Carousel";

const HourlyPreview: FC = () => {

    const { forecast } = useWeather();

    const listRef = useRef<HTMLUListElement>(null);

    const [hourlyTemperature, setHourlyTemperature] = useState<number[]>([]);
    const [hours, setHours] = useState<string[]>([]);
    const [hourlyTemperatureUnits, setHourlyTemperatureUnits] = useState<string>("");
    const [precipitationProbability, setPrecipitationProbability] = useState<number[]>([]);
    const [weatherCodes, setWeatherCodes] = useState<number[]>([]);
    const [isDay, setIsDay] = useState<number[]>([]);

    const [displayedDay, setDisplayedDay] = useState<string>("");

    useEffect(() => {
        const hourNow: number = new Date().getHours();

        if (forecast) {
            const hourly = forecast.hourly;
            const units = forecast.hourly_units;

            const start = hourNow + 1;
            const end = hourNow + 49;

            setHours(hourly.time.slice(start, end));
            setHourlyTemperature(hourly.temperature_2m.slice(start, end));
            setHourlyTemperatureUnits(units.temperature_2m);
            setWeatherCodes(hourly.weathercode.slice(start, end));
            setPrecipitationProbability(hourly.precipitation_probability.slice(start, end));
            setIsDay(hourly.is_day.slice(start, end));
        }
    }, [forecast]);

    const selectVisibleCells = () => {
        const visibleCells: Element[] = [];

        if (listRef.current) {
            const boxWidth = listRef.current?.clientWidth;

            Object.values(listRef.current.children).map(item => {
                const x = item.getBoundingClientRect().x;
                const width = item.getBoundingClientRect().width;

                if (x + width < boxWidth && x > 0) {
                    visibleCells.push(item);
                }
            });

            if (visibleCells[0]) {
                const time = visibleCells[0].getAttribute("data-time");
                if (time) {
                    const date = new Date(Number(time));
                    const day = date.getDay();
                    const weekday = title(getWeekday(day));
                    const today = new Date().getDay();
                    if (day === today) {
                        setDisplayedDay("Today");
                    } else if (day === today + 1) {
                        setDisplayedDay("Tomorrow");
                    } else {
                        setDisplayedDay(weekday);
                    }
                }
            }
        }
    };

    useEffect(() => {
        setDisplayedDay("Today");

        listRef.current?.addEventListener("scroll", selectVisibleCells);

        return () => {
            listRef.current?.removeEventListener("scroll", selectVisibleCells);
        }
    }, []);

    let day = 0;
    const renderHourlyData = () => {
        return hourlyTemperature.map((temp, index) => {

            const hour = new Date(hours[index]);
            const today = new Date().getDate();
            const currentIcon = currentIcons(weatherCodes[index], isDay[index]);
            const customProps = { "data-time": hour.getTime() };

            if (hour.getHours() === 0) day++;

            return <li key={index} className={`item day-${day}`} {...customProps}>
                <div className="date">
                    <span>{hour.getDate() === today ? "Today" : `${title(getWeekday(hour.getDay()))}, ${hour.getDate()}`}</span>
                    <div className="hour">
                        <span className="hour__value">{hour.getHours()}</span>
                        <span className="hour__unit">hr</span>
                    </div>
                </div>

                <div className="temperature">
                    <span className="temperature__value">{temp.toFixed(0)}</span>
                    <span className="temperature__unit">{hourlyTemperatureUnits}</span>
                </div>

                <img src={`icons/wi/${currentIcon}.svg`} alt="icon" width="50px" />

                <div className="description">{weatherDescription(weatherCodes[index])}</div>

                <div className="pop">
                    <img src="icons/wi/wi-rain.svg" alt="rain drop icon" width="16px" />
                    <span>{precipitationProbability[index]}%</span>
                </div>

                <div>{isDay[index] ? "Day" : "Night"}</div>
            </li>
        });
    };

    if (!forecast) {
        return (
            <div className="hourly-preview loading">
                Loading weather...
            </div>
        );
    }

    return (
        <div className="hourly-preview">
            <div className="heading">
                <p>Next {hours.length} hours ({displayedDay})</p>
            </div>

            <Carousel name="hourly" listRef={listRef}>
                <ul className="list list-horizontal" ref={listRef}>
                    {renderHourlyData()}
                </ul>
            </Carousel>
        </div>
    );
};

export default HourlyPreview;