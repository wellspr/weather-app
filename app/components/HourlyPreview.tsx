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

            hourly.time.forEach(t => {
                const now = new Date().getTime();
                const date = new Date(t).getTime();
                const endDate = new Date(now + 48 * 3600 * 1000).getTime();
                const day = new Date(t).getDate();

                if (date > now && date < endDate) {
                    daysArray.push(day);
                }
            });

            let days: number[] = [];
            new Set(daysArray).forEach(d => days.push(d));

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

            console.log(data);

            let weatherData: {
                times: string[];
                temperatures: (number| null)[];
                windspeed: (number | null)[];
                pop: (number | null)[];
                is_day: (number | null)[];
            }[] = [];

            const slices = days.map(day => daysArray.indexOf(day));
            slices.push(daysArray.length);

            console.log(slices);

            days.forEach((day, i) => {
                console.log(slices[i], slices[i + 1]);
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

            console.log(weatherData);

            setPlots([
                {
                    plotID: "temperaturePlot",
                    xLabel: "Next 48 hours",
                    yLabel: "Temperature",
                    plotName: "Temperature",
                    unit: "ºC",
                    x: data.times.map(h => new Date(h).getHours()),
                    y: [
                        weatherData[0].temperatures,
                        weatherData[1].temperatures,
                        weatherData[2].temperatures,
                    ],
                    color: ["red", "green", "blue"],
                },
                {
                    plotID: "windspeedPLot",
                    xLabel: "Next 48 hours",
                    yLabel: "Wind",
                    plotName: "Wind",
                    unit: "km/h",
                    x: data.times.map(h => new Date(h).getHours()),
                    y: [
                        weatherData[0].windspeed,
                        weatherData[1].windspeed,
                        weatherData[2].windspeed,
                    ],
                    color: ["red", "green", "blue"],
                },
                {
                    plotID: "popPlot",
                    xLabel: "Next 48 hours",
                    yLabel: "Rain",
                    plotName: "Rain",
                    unit: "%",
                    x: data.times.map(h => new Date(h).getHours()),
                    y: [
                        weatherData[0].pop,
                        weatherData[1].pop,
                        weatherData[2].pop,
                    ],
                    color: ["red", "green", "blue"],
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