// React
import { FC, useEffect, useState } from "react";

// Types
import { Location, SelectedLocation } from "~/types/types";

// Libraries
import localforage from "localforage";

// Components
import GeocodingResults from "~/components/GeocodingResults";
import CurrentWeather from "~/components/CurrentWeather";
import SavedLocations from "~/components/SavedLocations";
import HourlyPreview from "~/components/HourlyPreview";

// Hooks
import { useGeocoding } from "~/hooks/useGeocoding";
import { useReverseGeocoding } from "~/hooks/useReverseGeocoding";
import { useWeatherData } from "~/hooks/useWeatherData";
import { useNavigatorGeolocation } from "~/hooks/useNavigatorGeolocation";
import SearchBar from "~/components/SearchBar";
import Banner from "~/components/Banner";
import DailyPreview from "~/components/DailyPreview";

const Homepage: FC = () => {

    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>(null);
    const { loadingGeolocation, geolocation } = useNavigatorGeolocation();
    const { geocoding, fetchGeocodingData } = useGeocoding();
    const { reverseGeocoding, fetchReverseGeocodingData } = useReverseGeocoding();
    const { forecast, fetchWeatherData } = useWeatherData();

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

    useEffect(() => {
        if (geolocation) {
            fetchReverseGeocodingData({ geolocation });
        }
    }, [geolocation]);

    useEffect(() => {

        const getLastSelectedLocation = async () => {
            const lastSelectedlocation: Location = await localforage.getItem("lastSelectedLocation");
            return lastSelectedlocation;
        };

        getLastSelectedLocation()
            .then(location => {
                if (location) { 
                    //check for cached location
                    setSelectedLocation({
                        name: location.name,
                        country: location.country,
                        latitude: location.latitude,
                        longitude: location.longitude,
                    });

                    const latitude = location.latitude;
                    const longitude = location.longitude;
                    const { name } = location;
        
                    fetchWeatherData({ latitude, longitude, name });
                } 
                else if (reverseGeocoding) { 
                    //get browser location
                    setSelectedLocation({
                        name: reverseGeocoding.name,
                        country: reverseGeocoding.country,
                        latitude: reverseGeocoding.lat,
                        longitude: reverseGeocoding.lon
                    });
        
                    const latitude = reverseGeocoding.lat;
                    const longitude = reverseGeocoding.lon;
                    const { name } = reverseGeocoding;
        
                    fetchWeatherData({ latitude, longitude, name });
                }
            });
    }, [reverseGeocoding]);

    return (
        <div className="homepage">
            <Banner loadingGeolocation={loadingGeolocation} selectedLocation={selectedLocation} />

            <SearchBar fetchGeocodingData={fetchGeocodingData} />

            <CurrentWeather forecast={forecast} selectedLocation={selectedLocation} />

            <HourlyPreview forecast={forecast} />

            <DailyPreview forecast={forecast} />

            <GeocodingResults geocoding={geocoding} selectLocation={selectLocation} />

            <SavedLocations selectLocation={selectLocation} />
        </div>
    );
};

export default Homepage;