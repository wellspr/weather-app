import { FC, useEffect, useRef, useState } from "react";
import { weatherCode, weatherDescription } from "~/data/weatherCodes";
import { currentIcons } from "~/data/weatherIcons";
import { Forecast } from "~/types/types";

interface HourlyPreviewProps {
    forecast: Forecast;
}

const HourlyPreview: FC<HourlyPreviewProps> = ({ forecast }) => {

    const listRef = useRef<HTMLUListElement>(null);

    const [hourlyTemperature, setHourlyTemperature] = useState<number[]>([]);
    const [hours, setHours] = useState<string[]>([]);
    const [hourlyTemperatureUnits, setHourlyTemperatureUnits] = useState<string>("");
    const [precipitationProbability, setPrecipitationProbability] = useState<number[]>([]);
    const [weatherCodes, setWeatherCodes] = useState<number[]>([]);
    const [isDay, setIsDay] = useState<number[]>([]);

    useEffect(() => {
        const hourNow: number = new Date().getHours();

        if (forecast) {
            const hourly = forecast.hourly;
            const units = forecast.hourly_units;

            const start = hourNow + 1;
            //const end = hourNow + 25;
            const end = hourNow + 168;

            setHours(hourly.time.slice(start, end));
            setHourlyTemperature(hourly.temperature_2m.slice(start, end));
            setHourlyTemperatureUnits(units.temperature_2m);
            setWeatherCodes(hourly.weathercode.slice(start, end));
            setPrecipitationProbability(hourly.precipitation_probability.slice(start, end));
            setIsDay(hourly.is_day.slice(start, end));
        }
    }, [forecast]);

    const renderHourlyData = () => {
        return hourlyTemperature.map((temp, index) => {

            const hour = new Date(hours[index]);
            const today = new Date().getDate();
            const currentIcon = currentIcons(weatherCodes[index], isDay[index])

            return <li key={index} className="item">
                
                <div className="date">
                    <span>{hour.getDate() === today ? "Today" : hour.toLocaleDateString()}</span>
                    <div className="hour">
                        <span className="hour__value">{hour.getHours()}</span> 
                        <span className="hour__unit">hr</span> 
                    </div>
                </div>
                
                <div className="temperature">
                    <span className="temperature__value">{temp.toFixed(0)}</span>
                    <span className="temperature__unit">{hourlyTemperatureUnits}</span>
                </div>
                
                <div className="description">{weatherDescription(weatherCodes[index])}</div>
                
                <img src={`icons/wi/${currentIcon}.svg`} alt="icon" width="50px" />
                
                <div className="pop">
                    <img src="icons/wi/wi-rain.svg" alt="rain drop icon" width="16px" />
                    <span>{precipitationProbability[index]}%</span>
                </div>
                
                <div>{isDay[index] ? "Day" : "Night"}</div>
            </li>
        });
    };

    return (
        <div className="hourly-preview">
            <p>Next {hours.length} hours</p>

            <div className="hourly-carousel">
                <button
                    className="button button-navigation button-navigation__left"
                    onClick={() => {
                        if (listRef.current) {
                            let left = listRef.current.scrollLeft - 300;
                            listRef.current.scroll({
                                top: 0,
                                left,
                                behavior: "smooth",
                            });
                        }
                    }}
                ><img src="icons/regular/caret-left.svg" alt="left arrow" /></button>
                <ul className="list list-horizontal" ref={listRef}>
                    {renderHourlyData()}
                </ul>
                <button
                    className="button button-navigation button-navigation__right"
                    onClick={() => {
                        if (listRef.current) {
                            const width = listRef.current.getBoundingClientRect().width;
                            console.log(width);

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

export default HourlyPreview;