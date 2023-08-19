import { LoaderArgs, json } from "@remix-run/node";

export type Location = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    timezone: string;
    feature_code: string;
    country_code: string;
    country: string;
    country_id: number;
    population: number;
    postcodes: number;
    admin1: string;
    admin2: string;
    admin3: string;
    admin4?: string;
    admin1_id: number;
    admin2_id: number;
    admin3_id: number;
    admin4_id: number;
};

export type GeocodingResults = Location[] | null;

export const loader = async ({ params }: LoaderArgs) => {

    const baseURL = `https://geocoding-api.open-meteo.com/`;

    const searchParams = {
        name: params.location,
        count: 10,
        language: "en",
        format: "json",
    };

    let search = "search?";

    Object.entries(searchParams).forEach(entry => {
        search += `${entry[0]}=${entry[1]}&`;
    });

    search = search.slice(0, search.lastIndexOf("&"));

    const path = `/v1/${search}`;

    const url = new URL(path, baseURL);

    const response = await fetch(url);

    const data = await response.json();

    return json(data);
};