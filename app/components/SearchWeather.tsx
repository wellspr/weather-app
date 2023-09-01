import { createContext, useContext, useEffect, useState } from "react";

// Library
import localforage from "localforage";

// Components
import SearchBar from "./SearchBar";
import GeocodingResults from "./GeocodingResults";
import SavedLocations from "./SavedLocations";

// Types
import { Location } from "~/types/types";

// Context
import { useLocation, useWeather } from "~/context";

const searchBarContext: { showSearchBar: boolean, setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>> } = {
    showSearchBar: false,
    setShowSearchBar: () => { },
};

export const SearchBarContext = createContext(searchBarContext);
export const useSearchBarContext = () => useContext(SearchBarContext);

const SearchWeather = () => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    const {
        geocoding,
        reverseGeocoding, fetchReverseGeocodingData,
        geolocation,
        setSelectedLocation
    } = useLocation();

    const { fetchWeatherData } = useWeather();

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

    useEffect(() => {
        if (geolocation) {
            fetchReverseGeocodingData({ geolocation });
        }
    }, [geolocation]);

    if (showSearchBar) {
        return (
            <SearchBarContext.Provider value={{ showSearchBar, setShowSearchBar }}>
                <div className="search-weather">
                    <div className="search-popup">
                        <button className="button" onClick={() => setShowSearchBar(false)}>Close</button>
                        <SearchBar />
                        <SavedLocations />
                        <GeocodingResults />
                    </div>
                </div>
            </SearchBarContext.Provider>
        );
    } else {
        return (
            <div className="search-weather">
                <button
                    className="button button__search-weather"
                    onClick={() => setShowSearchBar(true)}
                >
                    Search Location
                </button>
            </div>
        );
    }
};

export default SearchWeather;