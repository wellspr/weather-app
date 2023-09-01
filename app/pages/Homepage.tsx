// React
import { FC, useEffect } from "react";

// Types
import { Location } from "~/types/types";

// Libraries
import localforage from "localforage";

// Components
import Banner from "~/components/Banner";
import CurrentWeather from "~/components/CurrentWeather";
import HourlyPreview from "~/components/HourlyPreview";
import DailyPreview from "~/components/DailyPreview";
import SearchWeather from "~/components/SearchWeather";

// Context
import { useWeather } from "~/context/weather/useWeather";

const Homepage: FC = () => {

    const { fetchWeatherData } = useWeather();

    useEffect(() => {
        const checkAndFetch = async () => {
            console.log("Focus on window");
            const lastSelectedLocation: Location = await localforage.getItem("lastSelectedLocation");

            if (lastSelectedLocation) {
                console.log("Selected Location: ", lastSelectedLocation);

                fetchWeatherData({
                    latitude: lastSelectedLocation?.latitude,
                    longitude: lastSelectedLocation?.longitude,
                    name: lastSelectedLocation?.name,
                });
            } else {
                console.log("no location selected.");
            }
        };

        window.addEventListener("focus", checkAndFetch);

        return () => {
            window.removeEventListener("focus", checkAndFetch);
        }
    }, []);

    return (
        <div className="homepage">
            <Banner />
            <SearchWeather />
            <CurrentWeather />
            <HourlyPreview />
            <DailyPreview />
        </div>
    );
};

export default Homepage;