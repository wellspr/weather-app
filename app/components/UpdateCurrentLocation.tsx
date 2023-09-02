import localforage from "localforage";
import { useEffect, useState } from "react";
import { Geocoding, Location, ReverseGeocoding, SelectedLocation } from "~/types/types";
import GeocodingResults from "./GeocodingResults";

const UpdateCurrentLocation = () => {

    const [currentLocation, setCurrentLocation] = useState<ReverseGeocoding>(null);
    const [geolocation, setGeolocation] = useState<Geocoding>(null);
    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>(null);
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const getCurrentLocation = async () => {
        const item: ReverseGeocoding | null = await localforage.getItem("current_geocoding", err => console.log(err));
        setCurrentLocation(item);
        return item;
    };

    useEffect(() => {
        getCurrentLocation().then(location => {
            setName(String(location?.name));
            setLatitude(String(location?.lat));
            setLongitude(String(location?.lon));
        });
    }, []);

    const fetchGeolocation = async () => {
        const term = name.trim();
        const url = encodeURI(`/api/geocoding/${term}`);
        const response = await fetch(url);
        const { results } = await response.json();
        setGeolocation(results);
    }

    /*
    useEffect(() => {
        if (currentLocation) {
            setName({ ...currentLocation, name: name })
        }
    }, [name]);

    useEffect(() => {
        if (currentLocation) {
            setCurrentLocation({ ...currentLocation, lat: Number(latitude) });
        }
    }, [latitude]);

    useEffect(() => {
        if (currentLocation) {
            setCurrentLocation({ ...currentLocation, lon: Number(longitude) });
        }
    }, [longitude]);

    */
    useEffect(() => {
        console.log(currentLocation);
    }, [currentLocation]);

    useEffect(() => {
        console.log(geolocation);
    }, [geolocation]);

    useEffect(() => {
        console.log(selectedLocation);
    }, [selectedLocation]);

    const selectLocation = (location: Location) => {
        setSelectedLocation(location);
    };

    return (
        <div>
            <h2>Update Current Location</h2>

            <div>
                <div className="input__location">
                    <label htmlFor="input-location">Location Name</label>
                    <input
                        id="input-location"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button onClick={fetchGeolocation}>Ok</button>
                </div>
                <div className="input__latitude">
                    <label htmlFor="input-latitude">Latitude</label>
                    <input
                        id="input-latitude"
                        type="text"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input__longitude">
                    <label htmlFor="input-longitude">Longitude</label>
                    <input
                        id="input-longitude"
                        type="text"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>

            <GeocodingResults />
        </div>
    );
};

export default UpdateCurrentLocation;