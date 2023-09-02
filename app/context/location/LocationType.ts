import { Geocoding, Location, ReverseGeocoding, SelectedLocation } from "~/types/types";

export type LocationType = {
    geolocation: GeolocationPosition | null;
    loadingGeolocation: boolean;
    geocoding: Geocoding;
    fetchGeocodingData: ({searchTerm}:{searchTerm: string}) => Promise<void>;
    unsetGeocoding: () => void;
    reverseGeocoding: ReverseGeocoding;
    fetchReverseGeocodingData: ({geolocation}:{geolocation: GeolocationPosition}) => Promise<void>;
    unsetReverseGeocoding: () => void;
    selectedLocation: SelectedLocation;
    setSelectedLocation: React.Dispatch<React.SetStateAction<SelectedLocation>>;
    selectLocation: (location: Location) => Promise<void>;
}