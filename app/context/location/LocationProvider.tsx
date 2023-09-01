import { FC, ReactNode, useState } from "react";
import { LocationContext } from "./LocationContext";
import { useNavigatorGeolocation } from "~/hooks/useNavigatorGeolocation";
import { useGeocoding } from "~/hooks/useGeocoding";
import { useReverseGeocoding } from "~/hooks/useReverseGeocoding";
import { LocationType } from "./LocationType";
import { useSelectedLocation } from "~/hooks/useSelectedLocation";

interface LocationProviderProps {
    children: ReactNode
}

const LocationProvider: FC<LocationProviderProps> = ({ children }) => {
    
    const { geolocation, loadingGeolocation } = useNavigatorGeolocation();
    const { geocoding, fetchGeocodingData } = useGeocoding();
    const { reverseGeocoding, fetchReverseGeocodingData } = useReverseGeocoding();
    const {selectedLocation, setSelectedLocation, selectLocation} = useSelectedLocation();

    const providerValue: LocationType = { 
        geolocation, 
        loadingGeolocation,
        geocoding,
        fetchGeocodingData,
        reverseGeocoding,
        fetchReverseGeocodingData,
        selectedLocation,
        setSelectedLocation,
        selectLocation,
    }

    return (
        <LocationContext.Provider value={{ ...providerValue }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;