import localforage from "localforage";
import { useState } from "react";
import { ReverseGeocoding } from "~/types/types";

type Cache = ReverseGeocoding | null;

export const useReverseGeocoding = () => {
    const makeCache = false; // later use external config to change this on demand...

    const [reverseGeocoding, setReverseGeocoding] = useState<ReverseGeocoding>(null);

    const fetchReverseGeocodingData = async ({ geolocation }: { geolocation: GeolocationPosition }) => {
        const key = "current_geocoding";
        const cache: Cache = await localforage.getItem(key, err => { console.log(err) });
        const { latitude, longitude } = geolocation?.coords;

        const fetchFreshData = async () => {
            const url = encodeURI(`/api/reverse-geocoding?latitude=${latitude}&longitude=${longitude}`);
            const response = await fetch(url);
            const data = await response.json();
            return data[0];
        };

        if (makeCache) {
            if (cache) {
                setReverseGeocoding(cache);
            } else {
                fetchFreshData().then(value => {
                    setReverseGeocoding(value);
                    localforage.setItem(key, value, err => { console.log(err) });
                })
            }
        }

        fetchFreshData().then(value => {
            setReverseGeocoding(value);
        });
    };

    return { reverseGeocoding, fetchReverseGeocodingData };
};