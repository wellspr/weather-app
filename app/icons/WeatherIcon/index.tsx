import { FC, ReactNode } from "react";

import {
    wi_alien,
    wi_barometer,
    wi_celsius,
    wi_cloud_down,
    wi_cloud_refresh,
    wi_cloud_up,
    wi_cloud,
    wi_cloudy_gusts,
    wi_cloudy_windy,
    wi_cloudy,
    wi_day_cloudy_gusts,
    wi_day_cloudy_high,
    wi_day_cloudy_windy,
    wi_day_cloudy,
    wi_day_fog,
    wi_day_hail,
    wi_day_haze,
    wi_day_light_wind,
    wi_day_lightning,
    wi_day_rain_mix,
    wi_day_rain_wind,
    wi_day_rain,
    wi_day_showers,
    wi_day_sleet_storm,
    wi_day_sleet,
    wi_day_snow_thunderstorm,
    wi_day_snow_wind,
    wi_day_snow,
    wi_day_sprinkle,
    wi_day_storm_showers,
    wi_day_sunny_overcast,
    wi_day_sunny,
    wi_day_thunderstorm,
    wi_day_windy,
    wi_degrees,
    wi_direction_down_left,
    wi_direction_down_right,
    wi_direction_down,
    wi_direction_left,
    wi_direction_right,
    wi_direction_up_left,
    wi_direction_up_right,
    wi_direction_up,
    wi_dust,
    wi_earthquake,
    wi_fahrenheit,
    wi_fire,
    wi_flood,
    wi_fog,
    wi_gale_warning,
    wi_hail,
    wi_horizon_alt,
    wi_horizon,
    wi_hot,
    wi_humidity,
    wi_hurricane_warning,
    wi_hurricane,
    wi_lightning,
    wi_lunar_eclipse,
    wi_meteor,
    wi_moon_alt_first_quarter,
    wi_moon_alt_full,
    wi_moon_alt_new,
    wi_moon_alt_third_quarter,
    wi_moon_alt_waning_crescent_1,
    wi_moon_alt_waning_crescent_2,
    wi_moon_alt_waning_crescent_3,
    wi_moon_alt_waning_crescent_4,
    wi_moon_alt_waning_crescent_5,
    wi_moon_alt_waning_crescent_6,
    wi_moon_alt_waning_gibbous_1,
    wi_moon_alt_waning_gibbous_2,
    wi_moon_alt_waning_gibbous_3,
    wi_moon_alt_waning_gibbous_4,
    wi_moon_alt_waning_gibbous_5,
    wi_moon_alt_waning_gibbous_6,
    wi_moon_alt_waxing_crescent_1,
    wi_moon_alt_waxing_crescent_2,
    wi_moon_alt_waxing_crescent_3,
    wi_moon_alt_waxing_crescent_4,
    wi_moon_alt_waxing_crescent_5,
    wi_moon_alt_waxing_crescent_6,
    wi_moon_alt_waxing_gibbous_1,
    wi_moon_alt_waxing_gibbous_2,
    wi_moon_alt_waxing_gibbous_3,
    wi_moon_alt_waxing_gibbous_4,
    wi_moon_alt_waxing_gibbous_5,
    wi_moon_alt_waxing_gibbous_6,
    wi_moon_first_quarter,
    wi_moon_full,
    wi_moon_new,
    wi_moon_third_quarter,
    wi_moon_waning_crescent_1,
    wi_moon_waning_crescent_2,
    wi_moon_waning_crescent_3,
    wi_moon_waning_crescent_4,
    wi_moon_waning_crescent_5,
    wi_moon_waning_crescent_6,
    wi_moon_waning_gibbous_1,
    wi_moon_waning_gibbous_2,
    wi_moon_waning_gibbous_3,
    wi_moon_waning_gibbous_4,
    wi_moon_waning_gibbous_5,
    wi_moon_waning_gibbous_6,
    wi_moon_waxing_6,
    wi_moon_waxing_crescent_1,
    wi_moon_waxing_crescent_2,
    wi_moon_waxing_crescent_3,
    wi_moon_waxing_crescent_4,
    wi_moon_waxing_crescent_5,
    wi_moon_waxing_gibbous_1,
    wi_moon_waxing_gibbous_2,
    wi_moon_waxing_gibbous_3,
    wi_moon_waxing_gibbous_4,
    wi_moon_waxing_gibbous_5,
    wi_moon_waxing_gibbous_6,
    wi_moonrise,
    wi_moonset,
    wi_na,
    wi_night_alt_cloudy_gusts,
    wi_night_alt_cloudy_high,
    wi_night_alt_cloudy_windy,
    wi_night_alt_cloudy,
    wi_night_alt_hail,
    wi_night_alt_lightning,
    wi_night_alt_partly_cloudy,
    wi_night_alt_rain_mix,
    wi_night_alt_rain_wind,
    wi_night_alt_rain,
    wi_night_alt_showers,
    wi_night_alt_sleet_storm,
    wi_night_alt_sleet,
    wi_night_alt_snow_thunderstorm,
    wi_night_alt_snow_wind,
    wi_night_alt_snow,
    wi_night_alt_sprinkle,
    wi_night_alt_storm_showers,
    wi_night_alt_thunderstorm,
    wi_night_clear,
    wi_night_cloudy_gusts,
    wi_night_cloudy_high,
    wi_night_cloudy_windy,
    wi_night_cloudy,
    wi_night_fog,
    wi_night_hail,
    wi_night_lightning,
    wi_night_partly_cloudy,
    wi_night_rain_mix,
    wi_night_rain_wind,
    wi_night_rain,
    wi_night_showers,
    wi_night_sleet_storm,
    wi_night_sleet,
    wi_night_snow_thunderstorm,
    wi_night_snow_wind,
    wi_night_snow,
    wi_night_sprinkle,
    wi_night_storm_showers,
    wi_night_thunderstorm,
    wi_rain_mix,
    wi_rain_wind,
    wi_rain,
    wi_raindrop,
    wi_raindrops,
    wi_refresh_alt,
    wi_refresh,
    wi_sandstorm,
    wi_showers,
    wi_sleet,
    wi_small_craft_advisory,
    wi_smog,
    wi_smoke,
    wi_snow_wind,
    wi_snow,
    wi_snowflake_cold,
    wi_solar_eclipse,
    wi_sprinkle,
    wi_stars,
    wi_storm_showers,
    wi_storm_warning,
    wi_strong_wind,
    wi_sunrise,
    wi_sunset,
    wi_thermometer_exterior,
    wi_thermometer_internal,
    wi_thermometer,
    wi_thunderstorm,
    wi_time_1,
    wi_time_10,
    wi_time_11,
    wi_time_12,
    wi_time_2,
    wi_time_3,
    wi_time_4,
    wi_time_5,
    wi_time_6,
    wi_time_7,
    wi_time_8,
    wi_time_9,
    wi_tornado,
    wi_train,
    wi_tsunami,
    wi_umbrella,
    wi_volcano,
    wi_wind_beaufort_0,
    wi_wind_beaufort_1,
    wi_wind_beaufort_10,
    wi_wind_beaufort_11,
    wi_wind_beaufort_12,
    wi_wind_beaufort_2,
    wi_wind_beaufort_3,
    wi_wind_beaufort_4,
    wi_wind_beaufort_5,
    wi_wind_beaufort_6,
    wi_wind_beaufort_7,
    wi_wind_beaufort_8,
    wi_wind_beaufort_9,
    wi_wind_deg,
    wi_windy,
} from "./wi";

import { Icon as IconType } from "./types";

interface IconProps {
    size?: number,
    color?: string,
    className?: string,
    children: ReactNode,
}

const Icon: FC<IconProps> = ({ size = 30, color = "currentColor", className, children }) => {
    return (
        <svg
            className={`wi ${className}`}
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill={color}
        >
            {children}
        </svg>
    );
};

const WeatherIcon: FC<{ 
    icon: IconType, 
    size?: number, 
    color?: string,
    className?: string,
}> = ({ icon, size, color, className }) => {

    switch (icon) {

        case "wi-alien":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-alien ${className}` : "wi-alien"}
                >
                    { wi_alien() }
                </Icon>
            );

        case "wi-barometer":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-barometer ${className}` : "wi-barometer"}
                >
                    { wi_barometer() }
                </Icon>
            );

        case "wi-celsius":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-celsius ${className}` : "wi-celsius"}
                >
                    { wi_celsius() }
                </Icon>
            );

        case "wi-cloud-down":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloud-down ${className}` : "wi-cloud-down"}
                >
                    { wi_cloud_down() }
                </Icon>
            );

        case "wi-cloud-refresh":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloud-refresh ${className}` : "wi-cloud-refresh"}
                >
                    { wi_cloud_refresh() }
                </Icon>
            );

        case "wi-cloud-up":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloud-up ${className}` : "wi-cloud-up"}
                >
                    { wi_cloud_up() }
                </Icon>
            );

        case "wi-cloud":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloud ${className}` : "wi-cloud"}
                >
                    { wi_cloud() }
                </Icon>
            );

        case "wi-cloudy-gusts":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloudy-gusts ${className}` : "wi-cloudy-gusts"}
                >
                    { wi_cloudy_gusts() }
                </Icon>
            );

        case "wi-cloudy-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloudy-windy ${className}` : "wi-cloudy-windy"}
                >
                    { wi_cloudy_windy() }
                </Icon>
            );

        case "wi-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-cloudy ${className}` : "wi-cloudy"}
                >
                    { wi_cloudy() }
                </Icon>
            );

        case "wi-day-cloudy-gusts":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-cloudy-gusts ${className}` : "wi-day-cloudy-gusts"}
                >
                    { wi_day_cloudy_gusts() }
                </Icon>
            );

        case "wi-day-cloudy-high":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-cloudy-high ${className}` : "wi-day-cloudy-high"}
                >
                    { wi_day_cloudy_high() }
                </Icon>
            );

        case "wi-day-cloudy-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-cloudy-windy ${className}` : "wi-day-cloudy-windy"}
                >
                    { wi_day_cloudy_windy() }
                </Icon>
            );

        case "wi-day-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-cloudy ${className}` : "wi-day-cloudy"}
                >
                    { wi_day_cloudy() }
                </Icon>
            );

        case "wi-day-fog":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-fog ${className}` : "wi-day-fog"}
                >
                    { wi_day_fog() }
                </Icon>
            );

        case "wi-day-hail":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-hail ${className}` : "wi-day-hail"}
                >
                    { wi_day_hail() }
                </Icon>
            );

        case "wi-day-haze":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-haze ${className}` : "wi-day-haze"}
                >
                    { wi_day_haze() }
                </Icon>
            );

        case "wi-day-light-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-light-wind ${className}` : "wi-day-light-wind"}
                >
                    { wi_day_light_wind() }
                </Icon>
            );

        case "wi-day-lightning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-lightning ${className}` : "wi-day-lightning"}
                >
                    { wi_day_lightning() }
                </Icon>
            );

        case "wi-day-rain-mix":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-rain-mix ${className}` : "wi-day-rain-mix"}
                >
                    { wi_day_rain_mix() }
                </Icon>
            );

        case "wi-day-rain-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-rain-wind ${className}` : "wi-day-rain-wind"}
                >
                    { wi_day_rain_wind() }
                </Icon>
            );

        case "wi-day-rain":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-rain ${className}` : "wi-day-rain"}
                >
                    { wi_day_rain() }
                </Icon>
            );

        case "wi-day-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-showers ${className}` : "wi-day-showers"}
                >
                    { wi_day_showers() }
                </Icon>
            );

        case "wi-day-sleet-storm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-sleet-storm ${className}` : "wi-day-sleet-storm"}
                >
                    { wi_day_sleet_storm() }
                </Icon>
            );

        case "wi-day-sleet":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-sleet ${className}` : "wi-day-sleet"}
                >
                    { wi_day_sleet() }
                </Icon>
            );

        case "wi-day-snow-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-snow-thunderstorm ${className}` : "wi-day-snow-thunderstorm"}
                >
                    { wi_day_snow_thunderstorm() }
                </Icon>
            );

        case "wi-day-snow-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-snow-wind ${className}` : "wi-day-snow-wind"}
                >
                    { wi_day_snow_wind() }
                </Icon>
            );

        case "wi-day-snow":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-snow ${className}` : "wi-day-snow"}
                >
                    { wi_day_snow() }
                </Icon>
            );

        case "wi-day-sprinkle":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-sprinkle ${className}` : "wi-day-sprinkle"}
                >
                    { wi_day_sprinkle() }
                </Icon>
            );

        case "wi-day-storm-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-storm-showers ${className}` : "wi-day-storm-showers"}
                >
                    { wi_day_storm_showers() }
                </Icon>
            );

        case "wi-day-sunny-overcast":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-sunny-overcast ${className}` : "wi-day-sunny-overcast"}
                >
                    { wi_day_sunny_overcast() }
                </Icon>
            );

        case "wi-day-sunny":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-sunny ${className}` : "wi-day-sunny"}
                >
                    { wi_day_sunny() }
                </Icon>
            );

        case "wi-day-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-thunderstorm ${className}` : "wi-day-thunderstorm"}
                >
                    { wi_day_thunderstorm() }
                </Icon>
            );

        case "wi-day-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-day-windy ${className}` : "wi-day-windy"}
                >
                    { wi_day_windy() }
                </Icon>
            );

        case "wi-degrees":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-degrees ${className}` : "wi-degrees"}
                >
                    { wi_degrees() }
                </Icon>
            );

        case "wi-direction-down-left":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-down-left ${className}` : "wi-direction-down-left"}
                >
                    { wi_direction_down_left() }
                </Icon>
            );

        case "wi-direction-down-right":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-down-right ${className}` : "wi-direction-down-right"}
                >
                    { wi_direction_down_right() }
                </Icon>
            );

        case "wi-direction-down":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-down ${className}` : "wi-direction-down"}
                >
                    { wi_direction_down() }
                </Icon>
            );

        case "wi-direction-left":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-left ${className}` : "wi-direction-left"}
                >
                    { wi_direction_left() }
                </Icon>
            );

        case "wi-direction-right":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-right ${className}` : "wi-direction-right"}
                >
                    { wi_direction_right() }
                </Icon>
            );

        case "wi-direction-up-left":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-up-left ${className}` : "wi-direction-up-left"}
                >
                    { wi_direction_up_left() }
                </Icon>
            );

        case "wi-direction-up-right":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-up-right ${className}` : "wi-direction-up-right"}
                >
                    { wi_direction_up_right() }
                </Icon>
            );

        case "wi-direction-up":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-direction-up ${className}` : "wi-direction-up"}
                >
                    { wi_direction_up() }
                </Icon>
            );

        case "wi-dust":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-dust ${className}` : "wi-dust"}
                >
                    { wi_dust() }
                </Icon>
            );

        case "wi-earthquake":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-earthquake ${className}` : "wi-earthquake"}
                >
                    { wi_earthquake() }
                </Icon>
            );

        case "wi-fahrenheit":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-fahrenheit ${className}` : "wi-fahrenheit"}
                >
                    { wi_fahrenheit() }
                </Icon>
            );

        case "wi-fire":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-fire ${className}` : "wi-fire"}
                >
                    { wi_fire() }
                </Icon>
            );

        case "wi-flood":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-flood ${className}` : "wi-flood"}
                >
                    { wi_flood() }
                </Icon>
            );

        case "wi-fog":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-fog ${className}` : "wi-fog"}
                >
                    { wi_fog() }
                </Icon>
            );

        case "wi-gale-warning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-gale-warning ${className}` : "wi-gale-warning"}
                >
                    { wi_gale_warning() }
                </Icon>
            );

        case "wi-hail":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-hail ${className}` : "wi-hail"}
                >
                    { wi_hail() }
                </Icon>
            );

        case "wi-horizon-alt":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-horizon-alt ${className}` : "wi-horizon-alt"}
                >
                    { wi_horizon_alt() }
                </Icon>
            );

        case "wi-horizon":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-horizon ${className}` : "wi-horizon"}
                >
                    { wi_horizon() }
                </Icon>
            );

        case "wi-hot":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-hot ${className}` : "wi-hot"}
                >
                    { wi_hot() }
                </Icon>
            );

        case "wi-humidity":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-humidity ${className}` : "wi-humidity"}
                >
                    { wi_humidity() }
                </Icon>
            );

        case "wi-hurricane-warning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-hurricane-warning ${className}` : "wi-hurricane-warning"}
                >
                    { wi_hurricane_warning() }
                </Icon>
            );

        case "wi-hurricane":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-hurricane ${className}` : "wi-hurricane"}
                >
                    { wi_hurricane() }
                </Icon>
            );

        case "wi-lightning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-lightning ${className}` : "wi-lightning"}
                >
                    { wi_lightning() }
                </Icon>
            );

        case "wi-lunar-eclipse":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-lunar-eclipse ${className}` : "wi-lunar-eclipse"}
                >
                    { wi_lunar_eclipse() }
                </Icon>
            );

        case "wi-meteor":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-meteor ${className}` : "wi-meteor"}
                >
                    { wi_meteor() }
                </Icon>
            );

        case "wi-moon-alt-first-quarter":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-first-quarter ${className}` : "wi-moon-alt-first-quarter"}
                >
                    { wi_moon_alt_first_quarter() }
                </Icon>
            );

        case "wi-moon-alt-full":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-full ${className}` : "wi-moon-alt-full"}
                >
                    { wi_moon_alt_full() }
                </Icon>
            );

        case "wi-moon-alt-new":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-new ${className}` : "wi-moon-alt-new"}
                >
                    { wi_moon_alt_new() }
                </Icon>
            );

        case "wi-moon-alt-third-quarter":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-third-quarter ${className}` : "wi-moon-alt-third-quarter"}
                >
                    { wi_moon_alt_third_quarter() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-1 ${className}` : "wi-moon-alt-waning-crescent-1"}
                >
                    { wi_moon_alt_waning_crescent_1() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-2 ${className}` : "wi-moon-alt-waning-crescent-2"}
                >
                    { wi_moon_alt_waning_crescent_2() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-3 ${className}` : "wi-moon-alt-waning-crescent-3"}
                >
                    { wi_moon_alt_waning_crescent_3() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-4 ${className}` : "wi-moon-alt-waning-crescent-4"}
                >
                    { wi_moon_alt_waning_crescent_4() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-5 ${className}` : "wi-moon-alt-waning-crescent-5"}
                >
                    { wi_moon_alt_waning_crescent_5() }
                </Icon>
            );

        case "wi-moon-alt-waning-crescent-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-crescent-6 ${className}` : "wi-moon-alt-waning-crescent-6"}
                >
                    { wi_moon_alt_waning_crescent_6() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-1 ${className}` : "wi-moon-alt-waning-gibbous-1"}
                >
                    { wi_moon_alt_waning_gibbous_1() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-2 ${className}` : "wi-moon-alt-waning-gibbous-2"}
                >
                    { wi_moon_alt_waning_gibbous_2() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-3 ${className}` : "wi-moon-alt-waning-gibbous-3"}
                >
                    { wi_moon_alt_waning_gibbous_3() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-4 ${className}` : "wi-moon-alt-waning-gibbous-4"}
                >
                    { wi_moon_alt_waning_gibbous_4() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-5 ${className}` : "wi-moon-alt-waning-gibbous-5"}
                >
                    { wi_moon_alt_waning_gibbous_5() }
                </Icon>
            );

        case "wi-moon-alt-waning-gibbous-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waning-gibbous-6 ${className}` : "wi-moon-alt-waning-gibbous-6"}
                >
                    { wi_moon_alt_waning_gibbous_6() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-1 ${className}` : "wi-moon-alt-waxing-crescent-1"}
                >
                    { wi_moon_alt_waxing_crescent_1() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-2 ${className}` : "wi-moon-alt-waxing-crescent-2"}
                >
                    { wi_moon_alt_waxing_crescent_2() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-3 ${className}` : "wi-moon-alt-waxing-crescent-3"}
                >
                    { wi_moon_alt_waxing_crescent_3() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-4 ${className}` : "wi-moon-alt-waxing-crescent-4"}
                >
                    { wi_moon_alt_waxing_crescent_4() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-5 ${className}` : "wi-moon-alt-waxing-crescent-5"}
                >
                    { wi_moon_alt_waxing_crescent_5() }
                </Icon>
            );

        case "wi-moon-alt-waxing-crescent-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-crescent-6 ${className}` : "wi-moon-alt-waxing-crescent-6"}
                >
                    { wi_moon_alt_waxing_crescent_6() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-1 ${className}` : "wi-moon-alt-waxing-gibbous-1"}
                >
                    { wi_moon_alt_waxing_gibbous_1() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-2 ${className}` : "wi-moon-alt-waxing-gibbous-2"}
                >
                    { wi_moon_alt_waxing_gibbous_2() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-3 ${className}` : "wi-moon-alt-waxing-gibbous-3"}
                >
                    { wi_moon_alt_waxing_gibbous_3() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-4 ${className}` : "wi-moon-alt-waxing-gibbous-4"}
                >
                    { wi_moon_alt_waxing_gibbous_4() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-5 ${className}` : "wi-moon-alt-waxing-gibbous-5"}
                >
                    { wi_moon_alt_waxing_gibbous_5() }
                </Icon>
            );

        case "wi-moon-alt-waxing-gibbous-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-alt-waxing-gibbous-6 ${className}` : "wi-moon-alt-waxing-gibbous-6"}
                >
                    { wi_moon_alt_waxing_gibbous_6() }
                </Icon>
            );

        case "wi-moon-first-quarter":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-first-quarter ${className}` : "wi-moon-first-quarter"}
                >
                    { wi_moon_first_quarter() }
                </Icon>
            );

        case "wi-moon-full":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-full ${className}` : "wi-moon-full"}
                >
                    { wi_moon_full() }
                </Icon>
            );

        case "wi-moon-new":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-new ${className}` : "wi-moon-new"}
                >
                    { wi_moon_new() }
                </Icon>
            );

        case "wi-moon-third-quarter":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-third-quarter ${className}` : "wi-moon-third-quarter"}
                >
                    { wi_moon_third_quarter() }
                </Icon>
            );

        case "wi-moon-waning-crescent-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-1 ${className}` : "wi-moon-waning-crescent-1"}
                >
                    { wi_moon_waning_crescent_1() }
                </Icon>
            );

        case "wi-moon-waning-crescent-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-2 ${className}` : "wi-moon-waning-crescent-2"}
                >
                    { wi_moon_waning_crescent_2() }
                </Icon>
            );

        case "wi-moon-waning-crescent-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-3 ${className}` : "wi-moon-waning-crescent-3"}
                >
                    { wi_moon_waning_crescent_3() }
                </Icon>
            );

        case "wi-moon-waning-crescent-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-4 ${className}` : "wi-moon-waning-crescent-4"}
                >
                    { wi_moon_waning_crescent_4() }
                </Icon>
            );

        case "wi-moon-waning-crescent-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-5 ${className}` : "wi-moon-waning-crescent-5"}
                >
                    { wi_moon_waning_crescent_5() }
                </Icon>
            );

        case "wi-moon-waning-crescent-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-crescent-6 ${className}` : "wi-moon-waning-crescent-6"}
                >
                    { wi_moon_waning_crescent_6() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-1 ${className}` : "wi-moon-waning-gibbous-1"}
                >
                    { wi_moon_waning_gibbous_1() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-2 ${className}` : "wi-moon-waning-gibbous-2"}
                >
                    { wi_moon_waning_gibbous_2() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-3 ${className}` : "wi-moon-waning-gibbous-3"}
                >
                    { wi_moon_waning_gibbous_3() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-4 ${className}` : "wi-moon-waning-gibbous-4"}
                >
                    { wi_moon_waning_gibbous_4() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-5 ${className}` : "wi-moon-waning-gibbous-5"}
                >
                    { wi_moon_waning_gibbous_5() }
                </Icon>
            );

        case "wi-moon-waning-gibbous-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waning-gibbous-6 ${className}` : "wi-moon-waning-gibbous-6"}
                >
                    { wi_moon_waning_gibbous_6() }
                </Icon>
            );

        case "wi-moon-waxing-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-6 ${className}` : "wi-moon-waxing-6"}
                >
                    { wi_moon_waxing_6() }
                </Icon>
            );

        case "wi-moon-waxing-crescent-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-crescent-1 ${className}` : "wi-moon-waxing-crescent-1"}
                >
                    { wi_moon_waxing_crescent_1() }
                </Icon>
            );

        case "wi-moon-waxing-crescent-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-crescent-2 ${className}` : "wi-moon-waxing-crescent-2"}
                >
                    { wi_moon_waxing_crescent_2() }
                </Icon>
            );

        case "wi-moon-waxing-crescent-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-crescent-3 ${className}` : "wi-moon-waxing-crescent-3"}
                >
                    { wi_moon_waxing_crescent_3() }
                </Icon>
            );

        case "wi-moon-waxing-crescent-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-crescent-4 ${className}` : "wi-moon-waxing-crescent-4"}
                >
                    { wi_moon_waxing_crescent_4() }
                </Icon>
            );

        case "wi-moon-waxing-crescent-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-crescent-5 ${className}` : "wi-moon-waxing-crescent-5"}
                >
                    { wi_moon_waxing_crescent_5() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-1 ${className}` : "wi-moon-waxing-gibbous-1"}
                >
                    { wi_moon_waxing_gibbous_1() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-2 ${className}` : "wi-moon-waxing-gibbous-2"}
                >
                    { wi_moon_waxing_gibbous_2() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-3 ${className}` : "wi-moon-waxing-gibbous-3"}
                >
                    { wi_moon_waxing_gibbous_3() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-4 ${className}` : "wi-moon-waxing-gibbous-4"}
                >
                    { wi_moon_waxing_gibbous_4() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-5 ${className}` : "wi-moon-waxing-gibbous-5"}
                >
                    { wi_moon_waxing_gibbous_5() }
                </Icon>
            );

        case "wi-moon-waxing-gibbous-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moon-waxing-gibbous-6 ${className}` : "wi-moon-waxing-gibbous-6"}
                >
                    { wi_moon_waxing_gibbous_6() }
                </Icon>
            );

        case "wi-moonrise":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moonrise ${className}` : "wi-moonrise"}
                >
                    { wi_moonrise() }
                </Icon>
            );

        case "wi-moonset":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-moonset ${className}` : "wi-moonset"}
                >
                    { wi_moonset() }
                </Icon>
            );

        case "wi-na":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-na ${className}` : "wi-na"}
                >
                    { wi_na() }
                </Icon>
            );

        case "wi-night-alt-cloudy-gusts":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-cloudy-gusts ${className}` : "wi-night-alt-cloudy-gusts"}
                >
                    { wi_night_alt_cloudy_gusts() }
                </Icon>
            );

        case "wi-night-alt-cloudy-high":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-cloudy-high ${className}` : "wi-night-alt-cloudy-high"}
                >
                    { wi_night_alt_cloudy_high() }
                </Icon>
            );

        case "wi-night-alt-cloudy-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-cloudy-windy ${className}` : "wi-night-alt-cloudy-windy"}
                >
                    { wi_night_alt_cloudy_windy() }
                </Icon>
            );

        case "wi-night-alt-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-cloudy ${className}` : "wi-night-alt-cloudy"}
                >
                    { wi_night_alt_cloudy() }
                </Icon>
            );

        case "wi-night-alt-hail":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-hail ${className}` : "wi-night-alt-hail"}
                >
                    { wi_night_alt_hail() }
                </Icon>
            );

        case "wi-night-alt-lightning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-lightning ${className}` : "wi-night-alt-lightning"}
                >
                    { wi_night_alt_lightning() }
                </Icon>
            );

        case "wi-night-alt-partly-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-partly-cloudy ${className}` : "wi-night-alt-partly-cloudy"}
                >
                    { wi_night_alt_partly_cloudy() }
                </Icon>
            );

        case "wi-night-alt-rain-mix":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-rain-mix ${className}` : "wi-night-alt-rain-mix"}
                >
                    { wi_night_alt_rain_mix() }
                </Icon>
            );

        case "wi-night-alt-rain-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-rain-wind ${className}` : "wi-night-alt-rain-wind"}
                >
                    { wi_night_alt_rain_wind() }
                </Icon>
            );

        case "wi-night-alt-rain":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-rain ${className}` : "wi-night-alt-rain"}
                >
                    { wi_night_alt_rain() }
                </Icon>
            );

        case "wi-night-alt-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-showers ${className}` : "wi-night-alt-showers"}
                >
                    { wi_night_alt_showers() }
                </Icon>
            );

        case "wi-night-alt-sleet-storm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-sleet-storm ${className}` : "wi-night-alt-sleet-storm"}
                >
                    { wi_night_alt_sleet_storm() }
                </Icon>
            );

        case "wi-night-alt-sleet":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-sleet ${className}` : "wi-night-alt-sleet"}
                >
                    { wi_night_alt_sleet() }
                </Icon>
            );

        case "wi-night-alt-snow-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-snow-thunderstorm ${className}` : "wi-night-alt-snow-thunderstorm"}
                >
                    { wi_night_alt_snow_thunderstorm() }
                </Icon>
            );

        case "wi-night-alt-snow-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-snow-wind ${className}` : "wi-night-alt-snow-wind"}
                >
                    { wi_night_alt_snow_wind() }
                </Icon>
            );

        case "wi-night-alt-snow":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-snow ${className}` : "wi-night-alt-snow"}
                >
                    { wi_night_alt_snow() }
                </Icon>
            );

        case "wi-night-alt-sprinkle":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-sprinkle ${className}` : "wi-night-alt-sprinkle"}
                >
                    { wi_night_alt_sprinkle() }
                </Icon>
            );

        case "wi-night-alt-storm-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-storm-showers ${className}` : "wi-night-alt-storm-showers"}
                >
                    { wi_night_alt_storm_showers() }
                </Icon>
            );

        case "wi-night-alt-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-alt-thunderstorm ${className}` : "wi-night-alt-thunderstorm"}
                >
                    { wi_night_alt_thunderstorm() }
                </Icon>
            );

        case "wi-night-clear":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-clear ${className}` : "wi-night-clear"}
                >
                    { wi_night_clear() }
                </Icon>
            );

        case "wi-night-cloudy-gusts":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-cloudy-gusts ${className}` : "wi-night-cloudy-gusts"}
                >
                    { wi_night_cloudy_gusts() }
                </Icon>
            );

        case "wi-night-cloudy-high":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-cloudy-high ${className}` : "wi-night-cloudy-high"}
                >
                    { wi_night_cloudy_high() }
                </Icon>
            );

        case "wi-night-cloudy-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-cloudy-windy ${className}` : "wi-night-cloudy-windy"}
                >
                    { wi_night_cloudy_windy() }
                </Icon>
            );

        case "wi-night-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-cloudy ${className}` : "wi-night-cloudy"}
                >
                    { wi_night_cloudy() }
                </Icon>
            );

        case "wi-night-fog":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-fog ${className}` : "wi-night-fog"}
                >
                    { wi_night_fog() }
                </Icon>
            );

        case "wi-night-hail":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-hail ${className}` : "wi-night-hail"}
                >
                    { wi_night_hail() }
                </Icon>
            );

        case "wi-night-lightning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-lightning ${className}` : "wi-night-lightning"}
                >
                    { wi_night_lightning() }
                </Icon>
            );

        case "wi-night-partly-cloudy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-partly-cloudy ${className}` : "wi-night-partly-cloudy"}
                >
                    { wi_night_partly_cloudy() }
                </Icon>
            );

        case "wi-night-rain-mix":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-rain-mix ${className}` : "wi-night-rain-mix"}
                >
                    { wi_night_rain_mix() }
                </Icon>
            );

        case "wi-night-rain-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-rain-wind ${className}` : "wi-night-rain-wind"}
                >
                    { wi_night_rain_wind() }
                </Icon>
            );

        case "wi-night-rain":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-rain ${className}` : "wi-night-rain"}
                >
                    { wi_night_rain() }
                </Icon>
            );

        case "wi-night-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-showers ${className}` : "wi-night-showers"}
                >
                    { wi_night_showers() }
                </Icon>
            );

        case "wi-night-sleet-storm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-sleet-storm ${className}` : "wi-night-sleet-storm"}
                >
                    { wi_night_sleet_storm() }
                </Icon>
            );

        case "wi-night-sleet":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-sleet ${className}` : "wi-night-sleet"}
                >
                    { wi_night_sleet() }
                </Icon>
            );

        case "wi-night-snow-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-snow-thunderstorm ${className}` : "wi-night-snow-thunderstorm"}
                >
                    { wi_night_snow_thunderstorm() }
                </Icon>
            );

        case "wi-night-snow-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-snow-wind ${className}` : "wi-night-snow-wind"}
                >
                    { wi_night_snow_wind() }
                </Icon>
            );

        case "wi-night-snow":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-snow ${className}` : "wi-night-snow"}
                >
                    { wi_night_snow() }
                </Icon>
            );

        case "wi-night-sprinkle":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-sprinkle ${className}` : "wi-night-sprinkle"}
                >
                    { wi_night_sprinkle() }
                </Icon>
            );

        case "wi-night-storm-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-storm-showers ${className}` : "wi-night-storm-showers"}
                >
                    { wi_night_storm_showers() }
                </Icon>
            );

        case "wi-night-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-night-thunderstorm ${className}` : "wi-night-thunderstorm"}
                >
                    { wi_night_thunderstorm() }
                </Icon>
            );

        case "wi-rain-mix":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-rain-mix ${className}` : "wi-rain-mix"}
                >
                    { wi_rain_mix() }
                </Icon>
            );

        case "wi-rain-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-rain-wind ${className}` : "wi-rain-wind"}
                >
                    { wi_rain_wind() }
                </Icon>
            );

        case "wi-rain":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-rain ${className}` : "wi-rain"}
                >
                    { wi_rain() }
                </Icon>
            );

        case "wi-raindrop":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-raindrop ${className}` : "wi-raindrop"}
                >
                    { wi_raindrop() }
                </Icon>
            );

        case "wi-raindrops":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-raindrops ${className}` : "wi-raindrops"}
                >
                    { wi_raindrops() }
                </Icon>
            );

        case "wi-refresh-alt":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-refresh-alt ${className}` : "wi-refresh-alt"}
                >
                    { wi_refresh_alt() }
                </Icon>
            );

        case "wi-refresh":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-refresh ${className}` : "wi-refresh"}
                >
                    { wi_refresh() }
                </Icon>
            );

        case "wi-sandstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-sandstorm ${className}` : "wi-sandstorm"}
                >
                    { wi_sandstorm() }
                </Icon>
            );

        case "wi-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-showers ${className}` : "wi-showers"}
                >
                    { wi_showers() }
                </Icon>
            );

        case "wi-sleet":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-sleet ${className}` : "wi-sleet"}
                >
                    { wi_sleet() }
                </Icon>
            );

        case "wi-small-craft-advisory":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-small-craft-advisory ${className}` : "wi-small-craft-advisory"}
                >
                    { wi_small_craft_advisory() }
                </Icon>
            );

        case "wi-smog":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-smog ${className}` : "wi-smog"}
                >
                    { wi_smog() }
                </Icon>
            );

        case "wi-smoke":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-smoke ${className}` : "wi-smoke"}
                >
                    { wi_smoke() }
                </Icon>
            );

        case "wi-snow-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-snow-wind ${className}` : "wi-snow-wind"}
                >
                    { wi_snow_wind() }
                </Icon>
            );

        case "wi-snow":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-snow ${className}` : "wi-snow"}
                >
                    { wi_snow() }
                </Icon>
            );

        case "wi-snowflake-cold":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-snowflake-cold ${className}` : "wi-snowflake-cold"}
                >
                    { wi_snowflake_cold() }
                </Icon>
            );

        case "wi-solar-eclipse":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-solar-eclipse ${className}` : "wi-solar-eclipse"}
                >
                    { wi_solar_eclipse() }
                </Icon>
            );

        case "wi-sprinkle":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-sprinkle ${className}` : "wi-sprinkle"}
                >
                    { wi_sprinkle() }
                </Icon>
            );

        case "wi-stars":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-stars ${className}` : "wi-stars"}
                >
                    { wi_stars() }
                </Icon>
            );

        case "wi-storm-showers":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-storm-showers ${className}` : "wi-storm-showers"}
                >
                    { wi_storm_showers() }
                </Icon>
            );

        case "wi-storm-warning":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-storm-warning ${className}` : "wi-storm-warning"}
                >
                    { wi_storm_warning() }
                </Icon>
            );

        case "wi-strong-wind":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-strong-wind ${className}` : "wi-strong-wind"}
                >
                    { wi_strong_wind() }
                </Icon>
            );

        case "wi-sunrise":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-sunrise ${className}` : "wi-sunrise"}
                >
                    { wi_sunrise() }
                </Icon>
            );

        case "wi-sunset":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-sunset ${className}` : "wi-sunset"}
                >
                    { wi_sunset() }
                </Icon>
            );

        case "wi-thermometer-exterior":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-thermometer-exterior ${className}` : "wi-thermometer-exterior"}
                >
                    { wi_thermometer_exterior() }
                </Icon>
            );

        case "wi-thermometer-internal":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-thermometer-internal ${className}` : "wi-thermometer-internal"}
                >
                    { wi_thermometer_internal() }
                </Icon>
            );

        case "wi-thermometer":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-thermometer ${className}` : "wi-thermometer"}
                >
                    { wi_thermometer() }
                </Icon>
            );

        case "wi-thunderstorm":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-thunderstorm ${className}` : "wi-thunderstorm"}
                >
                    { wi_thunderstorm() }
                </Icon>
            );

        case "wi-time-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-1 ${className}` : "wi-time-1"}
                >
                    { wi_time_1() }
                </Icon>
            );

        case "wi-time-10":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-10 ${className}` : "wi-time-10"}
                >
                    { wi_time_10() }
                </Icon>
            );

        case "wi-time-11":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-11 ${className}` : "wi-time-11"}
                >
                    { wi_time_11() }
                </Icon>
            );

        case "wi-time-12":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-12 ${className}` : "wi-time-12"}
                >
                    { wi_time_12() }
                </Icon>
            );

        case "wi-time-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-2 ${className}` : "wi-time-2"}
                >
                    { wi_time_2() }
                </Icon>
            );

        case "wi-time-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-3 ${className}` : "wi-time-3"}
                >
                    { wi_time_3() }
                </Icon>
            );

        case "wi-time-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-4 ${className}` : "wi-time-4"}
                >
                    { wi_time_4() }
                </Icon>
            );

        case "wi-time-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-5 ${className}` : "wi-time-5"}
                >
                    { wi_time_5() }
                </Icon>
            );

        case "wi-time-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-6 ${className}` : "wi-time-6"}
                >
                    { wi_time_6() }
                </Icon>
            );

        case "wi-time-7":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-7 ${className}` : "wi-time-7"}
                >
                    { wi_time_7() }
                </Icon>
            );

        case "wi-time-8":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-8 ${className}` : "wi-time-8"}
                >
                    { wi_time_8() }
                </Icon>
            );

        case "wi-time-9":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-time-9 ${className}` : "wi-time-9"}
                >
                    { wi_time_9() }
                </Icon>
            );

        case "wi-tornado":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-tornado ${className}` : "wi-tornado"}
                >
                    { wi_tornado() }
                </Icon>
            );

        case "wi-train":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-train ${className}` : "wi-train"}
                >
                    { wi_train() }
                </Icon>
            );

        case "wi-tsunami":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-tsunami ${className}` : "wi-tsunami"}
                >
                    { wi_tsunami() }
                </Icon>
            );

        case "wi-umbrella":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-umbrella ${className}` : "wi-umbrella"}
                >
                    { wi_umbrella() }
                </Icon>
            );

        case "wi-volcano":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-volcano ${className}` : "wi-volcano"}
                >
                    { wi_volcano() }
                </Icon>
            );

        case "wi-wind-beaufort-0":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-0 ${className}` : "wi-wind-beaufort-0"}
                >
                    { wi_wind_beaufort_0() }
                </Icon>
            );

        case "wi-wind-beaufort-1":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-1 ${className}` : "wi-wind-beaufort-1"}
                >
                    { wi_wind_beaufort_1() }
                </Icon>
            );

        case "wi-wind-beaufort-10":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-10 ${className}` : "wi-wind-beaufort-10"}
                >
                    { wi_wind_beaufort_10() }
                </Icon>
            );

        case "wi-wind-beaufort-11":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-11 ${className}` : "wi-wind-beaufort-11"}
                >
                    { wi_wind_beaufort_11() }
                </Icon>
            );

        case "wi-wind-beaufort-12":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-12 ${className}` : "wi-wind-beaufort-12"}
                >
                    { wi_wind_beaufort_12() }
                </Icon>
            );

        case "wi-wind-beaufort-2":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-2 ${className}` : "wi-wind-beaufort-2"}
                >
                    { wi_wind_beaufort_2() }
                </Icon>
            );

        case "wi-wind-beaufort-3":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-3 ${className}` : "wi-wind-beaufort-3"}
                >
                    { wi_wind_beaufort_3() }
                </Icon>
            );

        case "wi-wind-beaufort-4":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-4 ${className}` : "wi-wind-beaufort-4"}
                >
                    { wi_wind_beaufort_4() }
                </Icon>
            );

        case "wi-wind-beaufort-5":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-5 ${className}` : "wi-wind-beaufort-5"}
                >
                    { wi_wind_beaufort_5() }
                </Icon>
            );

        case "wi-wind-beaufort-6":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-6 ${className}` : "wi-wind-beaufort-6"}
                >
                    { wi_wind_beaufort_6() }
                </Icon>
            );

        case "wi-wind-beaufort-7":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-7 ${className}` : "wi-wind-beaufort-7"}
                >
                    { wi_wind_beaufort_7() }
                </Icon>
            );

        case "wi-wind-beaufort-8":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-8 ${className}` : "wi-wind-beaufort-8"}
                >
                    { wi_wind_beaufort_8() }
                </Icon>
            );

        case "wi-wind-beaufort-9":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-beaufort-9 ${className}` : "wi-wind-beaufort-9"}
                >
                    { wi_wind_beaufort_9() }
                </Icon>
            );

        case "wi-wind-deg":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-wind-deg ${className}` : "wi-wind-deg"}
                >
                    { wi_wind_deg() }
                </Icon>
            );

        case "wi-windy":
            return (
                <Icon 
                    size={size} 
                    color={color} 
                    className={className ? `wi-windy ${className}` : "wi-windy"}
                >
                    { wi_windy() }
                </Icon>
            );

        default:
            return null;
    }
};

export default WeatherIcon;
