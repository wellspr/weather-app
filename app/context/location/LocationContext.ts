import { createContext } from "react";
import { LocationType } from "./LocationType";

const defaultValue: LocationType = {
    geolocation: null,
    loadingGeolocation: false,
    geocoding: null,
    fetchGeocodingData: async () => {},
    reverseGeocoding: null,
    fetchReverseGeocodingData: async () => {},
    selectedLocation: null,
    setSelectedLocation: async () => {},
    selectLocation: async () => {},
};

export const LocationContext = createContext(defaultValue);