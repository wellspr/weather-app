import { LoaderArgs, json } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {

    const requestURL = new URL(request.url);
    
    const latitude = requestURL.searchParams.get('latitude');
    const longitude = requestURL.searchParams.get('longitude');
    
    const baseURL = `https://api.open-meteo.com/`;

    const queryParams = {
        latitude,
        longitude,
        current_weather: true,
        timezone: "auto"
    };

    let queryString = "?";

    Object.entries(queryParams).forEach(entry => {
        queryString += `${entry[0]}=${entry[1]}&`;
    });

    queryString = queryString.slice(0, queryString.lastIndexOf("&"));

    const path = `v1/forecast/${queryString}`;
    const url = new URL(path, baseURL);

    const response = await fetch(url);

    const data = await response.json();

    return json(data);
};