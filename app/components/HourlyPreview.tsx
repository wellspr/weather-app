import { FC, useEffect, useState } from "react";
import { Forecast } from "~/types/types";

interface HourlyPreviewProps {
    forecast: Forecast;
}

const HourlyPreview: FC<HourlyPreviewProps> = ({ forecast }) => {

    const [hourlyTemperature, setHourlyTemperature] = useState<number[]>([]);
    const [hours, setHours] = useState<string[]>([]);
    const [hourlyTemperatureUnits, setHourlyTemperatureUnits] = useState<string>("");

    useEffect(() => {
        const hourNow: number = new Date().getHours();

        if (forecast) {
            setHours(forecast.hourly.time.slice(hourNow, hourNow + 12));
            setHourlyTemperature(forecast.hourly.temperature_2m.slice(hourNow, hourNow + 12));
            setHourlyTemperatureUnits(forecast.hourly_units.temperature_2m);
        }
    }, [forecast]);

    const renderHourlyData = () => {
        return hourlyTemperature.map((temp, index) => {

            const hour = new Date(hours[index]);

            return <li key={index} className="item">
                <span>{hour.toDateString()}  {hour.getHours()}hr</span>
                <div className="temperature">
                    <span className="temperature__value">{temp.toFixed(0)}</span>
                    <span className="temperature__unit">{hourlyTemperatureUnits}</span>
                </div>
            </li>
        });
    };


    return (
        <div className="hourly-preview">
            <p>Hourly Preview (Next 12 Hours)</p>

            <ul className="list list-horizontal">
                {renderHourlyData()}
            </ul>

        </div>
    );
};

export default HourlyPreview;