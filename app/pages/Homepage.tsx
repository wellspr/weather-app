// React
import { FC, useEffect, useState } from "react";

// Types
import { Location, SelectedLocation } from "~/types/types";

// Libraries
import localforage from "localforage";

// Components
import GeocodingResults from "~/components/GeocodingResults";
import WeatherPreview from "~/components/WeatherPreview";

// Hooks
import { useGeocoding } from "~/hooks/useGeocoding";
import { useReverseGeocoding } from "~/hooks/useReverseGeocoding";
import { useWeatherData } from "~/hooks/useWeatherData";
import { useNavigatorGeolocation } from "~/hooks/useNavigatorGeolocation";

const Homepage: FC = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>(null);

    const { geocoding, fetchGeocodingData } = useGeocoding();
    const { reverseGeocoding, fetchReverseGeocodingData } = useReverseGeocoding();
    const { forecast, fetchWeatherData } = useWeatherData();
    const { loadingGeolocation, geolocation } = useNavigatorGeolocation();

    /* User selects a location from options */
    const selectLocation = async (location: Location) => {
        if (location) {
            setSelectedLocation({
                name: location.name,
                country: location.country,
                latitude: location.latitude,
                longitude: location.longitude
            });

            const { latitude, longitude, name } = location;
            fetchWeatherData({latitude, longitude, name});
        }

        const item: Location[] | null = await localforage.getItem("locations", err => { console.log(err) });

        if (item) {
            const data: Location[] = item;
            const ids = Object.values(data).map(item => item?.id);

            if (!ids.includes(location?.id)) {
                data.push(location);
                localforage.setItem("locations", data, err => { console.log(err) });
            }

        } else {
            localforage.setItem("locations", new Array(location), err => { console.log(err) });
        }
    };

    useEffect(() => {
        if (geolocation) {
            fetchReverseGeocodingData({ geolocation });
        }
    }, [geolocation]);

    useEffect(() => {
        if (reverseGeocoding) {
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
    }, [reverseGeocoding]);

    return (
        <div>
            <div className="banner banner__current-location">
                {
                    (loadingGeolocation || !selectedLocation) ?
                        <p>Fetching position...</p> :
                        <p>
                            {selectedLocation?.name},
                            {selectedLocation?.country} ({selectedLocation?.latitude},
                            {selectedLocation?.longitude})
                        </p>
                }
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    name="location"
                    id="location_id"
                    className="input input__search"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button
                    className="button button__search"
                    onClick={() => fetchGeocodingData({searchTerm})}
                    type="submit"
                >
                    Go
                </button>
            </div>

            <div className="weather">
                <WeatherPreview forecast={forecast} selectedLocation={selectedLocation} />
            </div>

            <div className="locations-preview">
                <GeocodingResults geocoding={geocoding} selectLocation={selectLocation} />
            </div>
        </div>
    );
};

export default Homepage;