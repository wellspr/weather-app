import localforage from "localforage";
import { useState } from "react";
import { Geocoding } from "~/types/types";

type Cache = Geocoding | null;

export const useGeocoding = () => {

    const [geocoding, setGeocoding] = useState<Geocoding>(null);

    const fetchGeocodingData = async ({searchTerm}:{searchTerm: string}) => {
        const term = searchTerm.trim();
        const key = `search_term-${term.replace(/ /g, "_").toLowerCase()}`;
        const cache: Cache = await localforage.getItem(key, err => { console.log(err) });

        const fetchFreshData = async () => {
            const url = encodeURI(`/api/geocoding/${term}`);
            const response = await fetch(url);
            const { results } = await response.json();
            return results;
        };

        if (cache) {
            setGeocoding(cache);
        } else {
            fetchFreshData().then(results => {
                setGeocoding(results);
                localforage.setItem(key, results, err => { console.log(err) });
            });
        }
    };

    return { geocoding, fetchGeocodingData };
};