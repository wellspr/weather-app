import localforage from "localforage";
import { useState } from "react";
import { Location, SelectedLocation } from "~/types/types";
import { useWeather } from "~/context";

export const useSelectedLocation = () => {

    const { fetchWeatherData } = useWeather();
    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>(null);

    /* User selects a location from options */
    const selectLocation = async (location: Location) => {
        console.log("Selecting location...");

        if (location) {
            setSelectedLocation({
                name: location.name,
                country: location.country,
                latitude: location.latitude,
                longitude: location.longitude
            });

            localforage.setItem("lastSelectedLocation", location);

            const { latitude, longitude, name } = location;
            fetchWeatherData({ latitude, longitude, name });
        }

        const item: Location[] | null = await localforage.getItem("locations");

        if (item) {
            const data: Location[] = item;
            const ids = Object.values(data).map(item => item?.id);

            if (!ids.includes(location?.id)) {
                data.push(location);
                localforage.setItem("locations", data);
            }

        } else {
            localforage.setItem("locations", new Array(location));
        }
    };

    return { selectedLocation, setSelectedLocation, selectLocation };
};