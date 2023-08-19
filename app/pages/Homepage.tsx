// React
import React, { useEffect, useState } from "react";
// Types
import { Location, GeocodingResults } from "~/routes/api.geocoding.$location";
import { Forecast } from "~/routes/api.forecast";
// Libraries
import { CircleFlag } from "react-circle-flags";
import localforage from "localforage";

/* Types */
type ReverseGeocoding = {
    name: string;
    state: string;
    country: string;
    lat: number;
    lon: number;
    local_names: any;
}

type Message = {
    fetchingPosition: boolean;
}

type ErrorMessage = {
    geolocationNotSupported: string | boolean,
    geolocationRetrievalError: string | boolean,
}

type SelectedLocation = {
    name: string,
    country: string,
    latitude: number,
    longitude: number
} | null;


/* Initial states */
const messageInitialState = { fetchingPosition: false };

const errorMessageInitialState = {
    geolocationNotSupported: false,
    geolocationRetrievalError: false
};


const Homepage: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [geocoding, setGeocoding] = useState<GeocodingResults>(null);
    const [reverseGeocoding, setReverseGeocoding] = useState<ReverseGeocoding | null>(null)
    const [forecast, setForecast] = useState<Forecast>(null);
    const [forecastLocation, setForecastLocation] = useState<Location | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<SelectedLocation>(null);
    const [message, setMessage] = useState<Message>(messageInitialState);
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>(errorMessageInitialState);

    const locateMe = () => {
        setMessage({ ...message, fetchingPosition: true });

        if (!navigator.geolocation) {
            setErrorMessage({
                ...errorMessage,
                geolocationNotSupported: "Geolocation not supported."
            });
        } else {
            const success = (position: GeolocationPosition) => {
                fetchReverseGeocodingData(position);
                setMessage({ ...message, fetchingPosition: false });
            };

            const error = () => setErrorMessage({
                ...errorMessage,
                geolocationRetrievalError: "Unable to retrieve your location."
            });

            navigator.geolocation.getCurrentPosition(success, error);
        };
    };

    useEffect(() => { locateMe() }, []);  // Fetch geolocation data on load.

    const fetchGeocodingData = async () => {
        const term = searchTerm.trim();
        const key = `search_term-${term.replace(/ /g, "_").toLowerCase()}`;
        const cache: GeocodingResults = await localforage.getItem(key, err => { console.log(err) });

        if (cache) {
            setGeocoding(cache);
        } else {
            const url = encodeURI(`/api/geocoding/${term}`);
            const response = await fetch(url);
            const { results } = await response.json();
            setGeocoding(results);
            localforage.setItem(key, results, err => { console.log(err) });
            console.log("Geocoding: ", results);
        }
    };

    const fetchReverseGeocodingData = async (currentPosition: GeolocationPosition) => {
        let rGeoData: ReverseGeocoding;
        const key = "current_geocoding";
        const cache: ReverseGeocoding | null = await localforage.getItem(key, err => { console.log(err) });
        const latitude = currentPosition?.coords.latitude;
        const longitude = currentPosition?.coords.longitude;

        if (cache) {
            rGeoData = cache;
            setReverseGeocoding(rGeoData);
        } else {
            const url = encodeURI(`/api/reverse-geocoding?latitude=${latitude}&longitude=${longitude}`);
            const response = await fetch(url);
            const data = await response.json();
            rGeoData = data[0];
            setReverseGeocoding(rGeoData);
            localforage.setItem(key, rGeoData, err => { console.log(err) });
        }

        setSelectedLocation({
            name: rGeoData.name,
            country: rGeoData.country,
            latitude: latitude,
            longitude: latitude
        });

        console.log("Reverse Geocoding: ", rGeoData,);
    };

    const fetchWeatherData = async (latitude: number, longitude: number) => {
        const location = selectedLocation?.name.replace(/ /g, "_").toLocaleLowerCase();
        const key = `weather_data-${location}`;
        type Cache = { cacheTime: number; location: string | undefined; data: Forecast } | null;
        const cache: Cache = await localforage.getItem(key, err => { console.log(err) });

        const fetchFreshData = async () => {
            const url = encodeURI(`/api/forecast/?latitude=${latitude}&longitude=${longitude}`);
            const response = await fetch(url);
            const data = await response.json();
            setForecast(data);

            const value: Cache = {
                cacheTime: new Date().getTime(),
                location,
                data
            };

            localforage.setItem(key, value, (err) => { console.log(err) });
        };

        if (cache && cache.data) {
            console.log("Using cache: ", cache);

            /** check if data is stale */
            const currentWeatherTime = cache.data.current_weather.time;

            if (
                (
                    new Date().getDate() === new Date(currentWeatherTime).getDate() &&
                    new Date().getHours() > new Date(currentWeatherTime).getHours()
                ) ||
                (
                    new Date().getDate() > new Date(currentWeatherTime).getDate()
                )
            ) {
                console.log("Data is stale...");
                fetchFreshData();
            } else {
                setForecast(cache.data);
            }
        } else {
            fetchFreshData();
        }
    };

    /* User selects a location from options */
    const selectLocation = async (location: Location) => {

        setForecastLocation(location);

        setSelectedLocation({
            name: location.name,
            country: location.country,
            latitude: location.latitude,
            longitude: location.longitude
        });

        const item: Location[] | null = await localforage.getItem("locations", err => { console.log(err) });

        if (item) {
            const data: Location[] = item;
            const ids = Object.values(data).map(item => item.id);

            if (!ids.includes(location.id)) {
                data.push(location);
                localforage.setItem("locations", data, err => { console.log(err) });
            }

        } else {
            localforage.setItem("locations", new Array(location), err => { console.log(err) });
        }
    };

    useEffect(() => {
        if (reverseGeocoding) {
            const { lat, lon } = reverseGeocoding;
            fetchWeatherData(lat, lon);  /** Fetch weather data */
        }
    }, [reverseGeocoding]);

    useEffect(() => {
        if (forecastLocation) {
            fetchWeatherData(forecastLocation.latitude, forecastLocation.longitude); /** Fetch weather data */
        }
    }, [forecastLocation]);

    const renderPreview = () => {
        if (!geocoding) return null;

        const list = Object.values(geocoding).map(location => {
            const countryCode = location.country_code.toLowerCase();
            return (
                <li
                    key={location.id}
                    className="item"
                    onClick={() => selectLocation(location)}
                >
                    <div>
                        <CircleFlag
                            countryCode={countryCode}
                            width="30"
                            height="30"
                        />
                        <span>{location.name}, </span>
                        <span>{location.admin1}, </span>
                        <span>{location.country}, </span>
                        <span>{location.country_code}, </span>
                    </div>
                    <div>
                        <span>(lat: {location.latitude}, lon: {location.longitude}, elevation: {location.elevation}m )</span>
                    </div>
                    <div>{location.timezone}</div>
                </li>
            );
        });

        return <ul className="list">{list}</ul>;
    };

    const renderWeatherPreview = () => {
        if (!forecast) return (
            <div>
                <p>Loading weather...</p>
            </div>
        );

        const currentWeather = forecast.current_weather;
        const hourlyUnits = forecast.hourly_units;
        const hourly = forecast.hourly;
        const dailyUnits = forecast.daily_units;
        const daily = forecast.daily;
        const currentDate = new Date(currentWeather.time)
        const currentHour = currentDate.getHours();

        return (
            <div className="weather-preview">
                <h2>Weather in: {selectedLocation?.name}, {selectedLocation?.country}</h2>
                <h3>Temperature: {currentWeather.temperature}{hourlyUnits.temperature_2m}</h3>
                <h4>Feels Like: {hourly.apparent_temperature[currentHour]}{hourlyUnits.apparent_temperature}</h4>
                <h4>Rain: {daily.precipitation_probability_mean[0]}{dailyUnits.precipitation_probability_mean}</h4>
                <div>{currentDate.toLocaleString()}</div>
            </div>
        );
    };

    return (
        <div>
            <div className="banner banner__current-location">
                {
                    (message.fetchingPosition || !selectedLocation) ?
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
                    onClick={fetchGeocodingData}
                    type="submit"
                >
                    Go
                </button>
            </div>

            <div className="weather">
                {renderWeatherPreview()}
            </div>

            <div className="locations-preview">
                {renderPreview()}
            </div>

        </div>
    );
};

export default Homepage;