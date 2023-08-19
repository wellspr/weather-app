import { LoaderArgs, json } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {   
    const requestURL = new URL(request.url);
    const latitude = requestURL.searchParams.get('latitude');
    const longitude = requestURL.searchParams.get('longitude');
    const apiKey = process.env.APIKEY;

    const url = encodeURI(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=10&appid=${apiKey}`);
    const response = await fetch(url);
    const data = await response.json();

    return json(data);
};