import { LoaderArgs, json } from "@remix-run/node";

export const loader = async ({ request }: LoaderArgs) => {

    const requestURL = new URL(request.url);

    const latitude = requestURL.searchParams.get('latitude');
    const longitude = requestURL.searchParams.get('longitude');
    const pastDays = requestURL.searchParams.get('past_days');
    const forecastDays = requestURL.searchParams.get('forecast_days');

    const baseURL = `https://api.open-meteo.com/`;

    const hourlyParams = [
        "temperature_2m",
        "relativehumidity_2m",
        "dewpoint_2m",
        "apparent_temperature",
        "pressure_msl",
        "surface_pressure",
        "cloudcover",
        "cloudcover_low",
        "cloudcover_mid",
        "cloudcover_high",
        "windspeed_10m",
        "windspeed_80m",
        "windspeed_120m",
        "windspeed_180m",
        "winddirection_10m",
        "winddirection_80m",
        "winddirection_120m",
        "winddirection_180m",
        "windgusts_10m",
        "shortwave_radiation",
        "direct_radiation",
        "direct_normal_irradiance",
        "diffuse_radiation",
        "vapor_pressure_deficit",
        "cape",
        "evapotranspiration",
        "et0_fao_evapotranspiration",
        "precipitation",
        "snowfall",
        "precipitation_probability",
        "rain",
        "showers",
        "weathercode",
        "snow_depth",
        "freezinglevel_height",
        "visibility",
        "soil_temperature_0cm",
        "soil_temperature_6cm",
        "soil_temperature_18cm",
        "soil_temperature_54cm",
        "soil_moisture_0_1cm",
        "soil_moisture_1_3cm",
        "soil_moisture_3_9cm",
        "soil_moisture_9_27cm",
        "soil_moisture_27_81cm",
        "is_day",
    ];

    const hourly = hourlyParams.join(",");

    const dailyParams = [
        "temperature_2m_max",
        "temperature_2m_min",
        "apparent_temperature_max",
        "apparent_temperature_min",
        "precipitation_sum",
        "rain_sum",
        "showers_sum",
        "snowfall_sum",
        "precipitation_hours",
        "precipitation_probability_max",
        "precipitation_probability_min",
        "precipitation_probability_mean",
        "weathercode",
        "sunrise",
        "sunset",
        "windspeed_10m_max",
        "windgusts_10m_max",
        "winddirection_10m_dominant",
        "shortwave_radiation_sum",
        "et0_fao_evapotranspiration",
        "uv_index_max",
        "uv_index_clear_sky_max",
    ];

    const daily = dailyParams.join(",");

    const queryParams = {
        latitude,
        longitude,
        past_days: pastDays ? Number(pastDays) : 0,
        forecast_days: forecastDays ? Number(forecastDays) : 7,
        current_weather: true,
        hourly,
        daily,
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