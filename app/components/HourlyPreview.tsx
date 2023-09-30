import { FC, useEffect, useRef, useState, lazy, Suspense } from "react";
import { useWeather } from "~/context";
import { weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { title } from "~/utils/transforms";
import { getWeekday } from "~/utils/weekdays";
import Carousel from "./Carousel";
import WeatherIcon from "~/icons/WeatherIcon";

const Plot = lazy(() => import("../plots/Plot"));

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

    const [showTemperaturePlot, setShowTemperaturePlot] = useState<boolean>(true);
    const [showWindSpeedPlot, setShowWindSpeedPlot] = useState<boolean>(false);
    const [showPOPPlot, setShowPOPPlot] = useState<boolean>(false);

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

    const renderTemperaturePlot = () => {

        const times = hours.map(hour => new Date(hour).getHours());
        const temperatures = hourlyTemperature.map(temp => Number(temp.toFixed(0)));
        const temperatureUnit = hourlyTemperatureUnits;
        const windSpeeds = windSpeed.map(ws => ws);
        const windSpeedUnit = windSpeedUnits;
        const pops = precipitationProbability.map(pop => pop);

        if (window !== undefined) {
            return (
                <Suspense fallback={"Loading Graph..."}>
                    {
                        showTemperaturePlot &&
                        <Plot
                            dataLabel={`Temperatures (${temperatureUnit})`}
                            title="Next 48 hours"
                            x={times}
                            y={temperatures}
                        />
                    }
                    {
                        showWindSpeedPlot &&
                        <Plot
                            dataLabel={`Wind Speed (${windSpeedUnit})`}
                            title="Next 48 hours"
                            x={times}
                            y={windSpeeds}
                        />
                    }
                    {
                        showPOPPlot &&
                        <Plot
                            dataLabel={`P.O.P. (%)`}
                            title="Next 48 hours"
                            x={times}
                            y={pops}
                        />
                    }
                </Suspense>
            );
        };
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

            <div className="bar-plot">
                <button
                    className={showTemperaturePlot ? "button button-plot button-plot--active" : "button button-plot"}
                    disabled={showTemperaturePlot}
                    onClick={() => {
                        setShowTemperaturePlot(true);
                        setShowWindSpeedPlot(false);
                        setShowPOPPlot(false);
                    }}>
                    Temperature
                </button>
                <button
                    className={showWindSpeedPlot ? "button button-plot button-plot--active" : "button button-plot"}
                    disabled={showWindSpeedPlot}
                    onClick={() => {
                        setShowTemperaturePlot(false);
                        setShowWindSpeedPlot(true);
                        setShowPOPPlot(false);
                    }}>
                    Wind Speed
                </button>
                <button
                    className={showPOPPlot ? "button button-plot button-plot--active" : "button button-plot"}
                    disabled={showPOPPlot}
                    onClick={() => {
                        setShowTemperaturePlot(false);
                        setShowWindSpeedPlot(false);
                        setShowPOPPlot(true);
                    }}>
                    P.O.P.
                </button>

                {renderTemperaturePlot()}
            </div>
        </div>
    );
};

export default HourlyPreview;