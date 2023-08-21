import { LoaderArgs, json } from "@remix-run/node";

export const loader = async ({ params }: LoaderArgs) => {

    const baseURL = `https://geocoding-api.open-meteo.com/`;

    const searchParams = {
        name: params.location,
        count: 10,
        language: params.language || "pt",
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