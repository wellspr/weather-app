export const currentIcons = (weatherCode: number, isDay: number) => {

    let iconName = "wi-";
    iconName += `${isDay ? "day" : "night"}`;
    iconName += "-"

    if (weatherCode === 0) {
        // Clear sky
        iconName += `${isDay ? "sunny" : "clear"}`;
    }

    if (weatherCode === 1) {
        // Mainly clear
        iconName += `${isDay?"sunny-overcast":"partly-cloudy"}`;
    }

    if (weatherCode === 2) {
        // Partly cloudy
        iconName = "wi-cloud";
    }

    if (weatherCode === 3) {
        // Overcast
        iconName = "wi-cloudy"
    }

    if (weatherCode === 45) {
        // Fog
        iconName += `${isDay ? "fog" : "fog"}`;
    }

    if (weatherCode === 48) {
        // Depositing rime fog
        iconName += `${isDay ? "fog" : "fog"}`;
    }

    if (weatherCode === 51) {
        // Drizzle: Light intensity
        iconName += `${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 53) {
        // Drizzle: Moderate intensity
        iconName += `${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 55) {
        // Drizzle: Dense intensity
        iconName += `${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 56) {
        // Freezing Drizzle: Light intensity
        iconName += `${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 57) {
        // Freezing Drizzle: dense intensity
        iconName += `${isDay ? "sprinkle" : "sprinkle"}`;
    }

    if (weatherCode === 61) {
        // Rain: Slight intensity
        iconName += `${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 63) {
        // Rain: Moderate intensity
        iconName += `${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 65) {
        // Rain: Heavy intensity
        iconName += `${isDay ? "rain" : "rain"}`;
    }

    if (weatherCode === 66) {
        // Freezing Rain: Light intensity
        iconName += `${isDay ? "" : ""}`;
    }

    if (weatherCode === 67) {
        // Freezing Rain: heavy intensity
        iconName += `${isDay ? "" : ""}`;
    }

    if (weatherCode === 71) {
        // Snow fall: Slight intensity
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 73) {
        // Snow fall: Moderate intensity
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 75) {
        // Snow fall: Heavy intensity
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 77) {
        // Snow grains
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 80) {
        // Rain showers: Slight
        iconName += `${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 81) {
        // Rain showers: Moderate
        iconName += `${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 82) {
        // Rain showers: Violent
        iconName += `${isDay ? "showers" : "showers"}`;
    }

    if (weatherCode === 85) {
        // Snow showers Slight
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 86) {
        // Snow showers Heavy
        iconName += `${isDay ? "snow" : "snow"}`;
    }

    if (weatherCode === 95) {
        // Thunderstorm: Slight or moderate
        iconName += "wi-thunderstorm";
    }

    if (weatherCode === 96) {
        // Thunderstorm with slight hail
        iconName += "wi-thunderstorm";
    }

    if (weatherCode === 99) {
        // Thunderstorm with heavy hail
        iconName += "wi-thunderstorm";
    }

    return iconName;
}