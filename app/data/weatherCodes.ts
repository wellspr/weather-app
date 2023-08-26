export const weatherCode = [
    { code: 0, description: "Clear sky" },
    { code: 1, description: "Mainly clear" },
    { code: 2, description: "Partly cloudy" },
    { code: 3, description: "Overcast" },
    { code: 45, description: "Fog" },
    { code: 48, description: "Depositing rime fog" },
    { code: 51, description: "Drizzle: Light intensity" },
    { code: 53, description: "Drizzle: Moderate intensity" },
    { code: 55, description: "Drizzle: Dense intensity" },
    { code: 56, description: "Freezing Drizzle: Light intensity" },
    { code: 57, description: "Freezing Drizzle: dense intensity" },
    { code: 61, description: "Rain: Slight intensity" },
    { code: 63, description: "Rain: Moderate intensity" },
    { code: 65, description: "Rain: Heavy intensity" },
    { code: 66, description: "Freezing Rain: Light intensity" },
    { code: 67, description: "Freezing Rain: heavy intensity" },
    { code: 71, description: "Snow fall: Slight intensity" },
    { code: 73, description: "Snow fall: Moderate intensity" },
    { code: 75, description: "Snow fall: Heavy intensity" },
    { code: 77, description: "Snow grains" },
    { code: 80, description: "Rain showers: Slight" },
    { code: 81, description: "Rain showers: Moderate" },
    { code: 82, description: "Rain showers: Violent" },
    { code: 85, description: "Snow showers Slight" },
    { code: 86, description: "Snow showers Heavy" },
    { code: 95, description: "Thunderstorm: Slight or moderate" },
    { code: 96, description: "Thunderstorm with slight hail" },
    { code: 99, description: "Thunderstorm with heavy hail" },
];

export const weatherDescription = (code: number) => {
    return weatherCode.filter(entry => {
        return entry.code === code;
    })[0].description;
};