import { createContext } from "react";
import { LocationType } from "./LocationType";

const defaultValue: LocationType = {
    geolocation: null,
    loadingGeolocation: false,
    geocoding: null,
    fetchGeocodingData: async () => {},
    unsetGeocoding: () => {},
    reverseGeocoding: null,
    fetchReverseGeocodingData: async () => {},
    unsetReverseGeocoding: () => {},
    selectedLocation: null,
    setSelectedLocation: async () => {},
    selectLocation: async () => {},
};

export const LocationContext = createContext(defaultValue);