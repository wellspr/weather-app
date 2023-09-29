import { Icon } from "~/icons/WeatherIcon/types";

export const currentIcons = (weatherCode: number, isDay: number) => {
    
    let iconName: Icon = "wi-umbrella";

    if (weatherCode === 0) {
        // Clear sky
        iconName = `wi-${isDay ? "day-sunny" : "night-clear"}`;
    }

    if (weatherCode === 1) {
        // Mainly clear
        iconName = `wi-${isDay?"day-sunny-overcast":"night-partly-cloudy"}`;
    }

    if (weatherCode === 2) {
        // Partly cloudy
        iconName = `wi-${isDay ? "day-cloudy" : "night-cloudy"}`;
    }

    if (weatherCode === 3) {
        // Overcast
        iconName = "wi-cloudy"
    }

    if (weatherCode === 45) {
        // Fog
        iconName = `wi-${isDay ? "day-fog" : "night-fog"}`;
    }

    if (weatherCode === 48) {
        // Depositing rime fog
        iconName = `wi-${isDay ? "day-fog" : "night-fog"}`;
    }

    if (weatherCode === 51) {
        // Drizzle: Light intensity
        iconName = `wi-${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 53) {
        // Drizzle: Moderate intensity
        iconName = `wi-${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 55) {
        // Drizzle: Dense intensity
        iconName = `wi-${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 56) {
        // Freezing Drizzle: Light intensity
        iconName = `wi-${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 57) {
        // Freezing Drizzle: dense intensity
        iconName = `wi-${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 61) {
        // Rain: Slight intensity
        iconName = `wi-${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 63) {
        // Rain: Moderate intensity
        iconName = `wi-${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 65) {
        // Rain: Heavy intensity
        iconName = `wi-${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 66) {
        // Freezing Rain: Light intensity
        iconName = `wi-${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 67) {
        // Freezing Rain: heavy intensity
        iconName = `wi-${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 71) {
        // Snow fall: Slight intensity
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 73) {
        // Snow fall: Moderate intensity
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 75) {
        // Snow fall: Heavy intensity
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 77) {
        // Snow grains
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 80) {
        // Rain showers: Slight
        iconName = `wi-${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 81) {
        // Rain showers: Moderate
        iconName = `wi-${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 82) {
        // Rain showers: Violent
        iconName = `wi-${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 85) {
        // Snow showers Slight
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 86) {
        // Snow showers Heavy
        iconName = `wi-${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 95) {
        // Thunderstorm: Slight or moderate
        iconName = "wi-thunderstorm";
    }

    if (weatherCode === 96) {
        // Thunderstorm with slight hail
        iconName = "wi-thunderstorm";
    }

    if (weatherCode === 99) {
        // Thunderstorm with heavy hail
        iconName = "wi-thunderstorm";
    }

    return iconName;
}