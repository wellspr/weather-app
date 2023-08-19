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

export type Forecast = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        is_day: number;
        time: string;
    }
    hourly_units: {
        time: "string";
        temperature_2m: "string";
        relativehumidity_2m: "string";
        dewpoint_2m: "string";
        apparent_temperature: "string";
        pressure_msl: "string";
        surface_pressure: "string";
        cloudcover: "string";
        cloudcover_low: "string";
        cloudcover_mid: "string";
        cloudcover_high: "string";
        windspeed_10m: "string";
        windspeed_80m: "string";
        windspeed_120m: "string";
        windspeed_180m: "string";
        winddirection_10m: "string";
        winddirection_80m: "string";
        winddirection_120m: "string";
        winddirection_180m: "string";
        windgusts_10m: "string";
        shortwave_radiation: "string";
        direct_radiation: "string";
        direct_normal_irradiance: "string";
        diffuse_radiation: "string";
        vapor_pressure_deficit: "string";
        cape: "string";
        evapotranspiration: "string";
        et0_fao_evapotranspiration: "string";
        precipitation: "string";
        snowfall: "string";
        precipitation_probability: "string";
        rain: "string";
        showers: "string";
        weathercode: "string";
        snow_depth: "string";
        freezinglevel_height: "string";
        visibility: "string";
        soil_temperature_0cm: "string";
        soil_temperature_6cm: "string";
        soil_temperature_18cm: "string";
        soil_temperature_54cm: "string";
        soil_moisture_0_1cm: "string";
        soil_moisture_1_3cm: "string";
        soil_moisture_3_9cm: "string";
        soil_moisture_9_27cm: "string";
        soil_moisture_27_81cm: "string";
        is_day: "string";
    }
    hourly: {
        time: string[];
        temperature_2m: number[];
        relativehumidity_2m: number[];
        dewpoint_2m: number[];
        apparent_temperature: number[];
        pressure_msl: number[];
        surface_pressure: number[];
        cloudcover: number[];
        cloudcover_low: number[];
        cloudcover_mid: number[];
        cloudcover_high: number[];
        windspeed_10m: number[];
        windspeed_80m: number[];
        windspeed_120m: number[];
        windspeed_180m: number[];
        winddirection_10m: number[];
        winddirection_80m: number[];
        winddirection_120m: number[];
        winddirection_180m: number[];
        windgusts_10m: number[];
        shortwave_radiation: number[];
        direct_radiation: number[];
        direct_normal_irradiance: number[];
        diffuse_radiation: number[];
        vapor_pressure_deficit: number[];
        cape: number[];
        evapotranspiration: number[];
        et0_fao_evapotranspiration: number[];
        precipitation: number[];
        snowfall: number[];
        precipitation_probability: number[];
        rain: number[];
        showers: number[];
        weathercode: number[];
        snow_depth: number[];
        freezinglevel_height: number[];
        visibility: number[];
        soil_temperature_0cm: number[];
        soil_temperature_6cm: number[];
        soil_temperature_18cm: number[];
        soil_temperature_54cm: number[];
        soil_moisture_0_1cm: number[];
        soil_moisture_1_3cm: number[];
        soil_moisture_3_9cm: number[];
        soil_moisture_9_27cm: number[];
        soil_moisture_27_81cm: number[];
        is_day: number[];
    },
    daily_units: {
        time: "string";
        temperature_2m_max: "string";
        temperature_2m_min: "string";
        apparent_temperature_max: "string";
        apparent_temperature_min: "string";
        precipitation_sum: "string";
        rain_sum: "string";
        showers_sum: "string";
        snowfall_sum: "string";
        precipitation_hours: "string";
        precipitation_probability_max: "string";
        precipitation_probability_min: "string";
        precipitation_probability_mean: "string";
        weathercode: "string";
        sunrise: "string";
        sunset: "string";
        windspeed_10m_max: "string";
        windgusts_10m_max: "string";
        winddirection_10m_dominant: "string";
        shortwave_radiation_sum: "string";
        et0_fao_evapotranspiration: "string";
        uv_index_max: "string";
        uv_index_clear_sky_max: "string";
    }
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        apparent_temperature_max: number[];
        apparent_temperature_min: number[];
        precipitation_sum: number[];
        rain_sum: number[];
        showers_sum: number[];
        snowfall_sum: number[];
        precipitation_hours: number[];
        precipitation_probability_max: number[];
        precipitation_probability_min: number[];
        precipitation_probability_mean: number[];
        weathercode: number[];
        sunrise: string[];
        sunset: string[];
        windspeed_10m_max: number[];
        windgusts_10m_max: number[];
        winddirection_10m_dominant: number[];
        shortwave_radiation_sum: number[];
        et0_fao_evapotranspiration: number[];
        uv_index_max: number[];
        uv_index_clear_sky_max: number[];
    }
} | null;