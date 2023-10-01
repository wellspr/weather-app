import { FC, useEffect, useRef, useState } from "react";
import { useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { title } from "~/utils/transforms";
import { getWeekday } from "~/utils/weekdays";
import Carousel from "./Carousel";
import WeatherIcon from "~/icons/WeatherIcon";
import DataPlot, { Plots } from "./DataPlot";

const HourlyPreview: FC = () => {

    const { forecast } = useWeather();

    const listRef = useRef<HTMLUListElement>(null);

    const [hourlyTemperature, setHourlyTemperature] = useState<number[]>([]);
    const [hours, setHours] = useState<string[]>([]);
    const [hourlyTemperatureUnits, setHourlyTemperatureUnits] = useState<string>("");
    const [precipitationProbability, setPrecipitationProbability] = useState<number[]>([]);
    const [windSpeed, setWindSpeed] = useState<number[]>([]);
    const [windSpeedUnits, setWindSpeedUnits] = useState<string>("");
    const [weatherCodes, setWeatherCodes] = useState<number[]>([]);
    const [isDay, setIsDay] = useState<number[]>([]);

    const [displayedDay, setDisplayedDay] = useState<string>("");

    const [plots, setPlots] = useState<Plots>([]);

    useEffect(() => {
        const hourNow: number = new Date().getHours();

        if (forecast) {
            const hourly = forecast.hourly;
            const units = forecast.hourly_units;

            let daysArray: number[] = [];
            let datesArray: {weekday: "" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday", date: string}[] = [];

            hourly.time.forEach(t => {
                const dateObj = new Date(t);
                const now = new Date().getTime();
                const date = dateObj.getTime();
                const endDate = new Date(now + 48 * 3600 * 1000).getTime();
                const day = dateObj.getDate();
                const month = dateObj.getMonth();
                const weekday = getWeekday(dateObj.getDay());

                if (date > now && date < endDate) {
                    daysArray.push(day);
                    datesArray.push({ weekday, date: `${day}/${month + 1}`});
                }
            });

            let days: number[] = [];
            new Set(daysArray).forEach(d => days.push(d));

            let dates: typeof datesArray = [];
            new Set(datesArray).forEach(d => dates.push(d));

            const data: {
                times: string[];
                temperatures: (number | null)[];
                windspeed: number[];
                pop: number[];
                is_day: number[];
            } = {
                times: [],
                temperatures: [],
                windspeed: [],
                pop: [],
                is_day: [],
            };

            hourly.time.forEach((t, i) => {
                const now = new Date().getTime();
                const date = new Date(t).getTime();
                const endDate = new Date(now + 48 * 3600 * 1000).getTime();

                if (date > now && date < endDate) {
                    data.times.push(t);
                    data.temperatures.push(hourly.temperature_2m[i]);
                    data.windspeed.push(hourly.windspeed_10m[i]);
                    data.pop.push(hourly.precipitation_probability[i]);
                    data.is_day.push(hourly.is_day[i]);
                }
            });

            let weatherData: {
                times: string[];
                temperatures: (number| null)[];
                windspeed: (number | null)[];
                pop: (number | null)[];
                is_day: (number | null)[];
            }[] = [];

            const slices = days.map(day => daysArray.indexOf(day));
            slices.push(daysArray.length);

            days.forEach((day, i) => {
                weatherData[i] = {
                    times: data.times,
                    temperatures: data.temperatures.map((t, index) => {
                        if (index>=slices[i] && index<slices[i+1]) {
                            return t;
                        }
                        return null;
                    }),
                    windspeed: data.windspeed.map((ws, index) => {
                        if (index>=slices[i] && index<slices[i+1]) {
                            return ws;
                        }
                        return null;
                    }),
                    pop: data.pop.map((p, index) => {
                        if (index>=slices[i] && index<slices[i+1]) {
                            return p;
                        }
                        return null;
                    }),
                    is_day: data.is_day.map((d, index) => {
                        if (index>=slices[i] && index<slices[i+1]) {
                            return d;
                        }
                        return null;
                    }),
                }
            });

            setPlots([
                {
                    plotID: "temperaturePlot",
                    plotName: "Temperature",
                    xLabel: "Next 48 hours",
                    yLabel: `Temperature (${units.temperature_2m})`,
                    //title: "Temperature",
                    label: dates.map((d, i) => {
                        if (i === 0) return `Today - ${d.date}`;
                        if (i === 1) return `Tomorrow - ${d.date}`;
                        return `${d.weekday.replace(d.weekday[0], d.weekday[0].toUpperCase())} - ${d.date}`;
                    }),
                    x: data.times.map(h => new Date(h).getHours()),
                    y: weatherData.map(d => d.temperatures),
                    backgroundColor: ["rgba(0, 128, 0, .1)", "rgba(0, 0, 255, .1)", "rgba(255, 165, 0, .1"],
                    borderColor: ["rgba(0, 128, 0, 1)", "rgba(0, 0, 255, 1)", "rgba(255, 165, 0, 1"]
                },
                {
                    plotID: "windspeedPLot",
                    plotName: "Wind",
                    xLabel: "Next 48 hours",
                    yLabel: `Wind (${units.windspeed_10m})`,
                    //title: "Wind Speed",
                    label: dates.map((d, i) => {
                        if (i === 0) return `Today - ${d}`;
                        if (i === 1) return `Tomorrow - ${d}`;
                        return `${d}`;
                    }),
                    x: data.times.map(h => new Date(h).getHours()),
                    y: weatherData.map(d => d.windspeed),
                    backgroundColor: ["rgba(0, 128, 0, .1)", "rgba(0, 0, 255, .1)", "rgba(255, 165, 0, .1"],
                    borderColor: ["rgba(0, 128, 0, 1)", "rgba(0, 0, 255, 1)", "rgba(255, 165, 0, 1"]
                },
                {
                    plotID: "popPlot",
                    plotName: "Rain",
                    xLabel: "Next 48 hours",
                    yLabel: `Rain (${units.precipitation_probability})`,
                    //title: "Rain",
                    label: dates.map((d, i) => {
                        if (i === 0) return `Today - ${d}`;
                        if (i === 1) return `Tomorrow - ${d}`;
                        return `${d}`;
                    }),
                    x: data.times.map(h => new Date(h).getHours()),
                    y: weatherData.map(d => d.pop),
                    backgroundColor: ["rgba(0, 128, 0, .1)", "rgba(0, 0, 255, .1)", "rgba(255, 165, 0, .1"],
                    borderColor: ["rgba(0, 128, 0, 1)", "rgba(0, 0, 255, 1)", "rgba(255, 165, 0, 1"]
                }
            ]);

            const start = hourNow + 1;
            const end = hourNow + 49;

            setHours(hourly.time.slice(start, end));
            setHourlyTemperature(hourly.temperature_2m.slice(start, end));
            setHourlyTemperatureUnits(units.temperature_2m);
            setWeatherCodes(hourly.weathercode.slice(start, end));
            setPrecipitationProbability(hourly.precipitation_probability.slice(start, end));
            setWindSpeed(hourly.windspeed_10m);
            setWindSpeedUnits(units.windspeed_10m);
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

                <WeatherIcon icon={`${currentIcon}`} size={50} />

                <div className="description">{weatherDescription(weatherCodes[index])}</div>

                <div className="parameter pop">
                    <WeatherIcon icon="wi-rain" size={22} />
                    <span>{precipitationProbability[index]}%</span>
                </div>

                <div className="parameter windspeed">
                    <WeatherIcon icon="wi-strong-wind" size={22} />
                    <span>{windSpeed[index]}{windSpeedUnits}</span>
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

    if (plots.length === 0) return;

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

            <DataPlot
                plots={plots}
            />
        </div>
    );
};

export default HourlyPreview;