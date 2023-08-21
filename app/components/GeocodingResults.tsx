import { FC } from "react";
import { CircleFlag } from "react-circle-flags";
import { Geocoding, Location } from "~/types/types";

interface GeocodingResultsProps {
    geocoding: Geocoding;
    selectLocation: (location: Location) => void;
}

const GeocodingResults:FC<GeocodingResultsProps> = ({ geocoding, selectLocation }) => {

    if (!geocoding) return null;

        const list = Object.values(geocoding).map(location => {

            if (!location) return null;

            const countryCode = location.country_code.toLowerCase();
            return (
                <li
                    key={location.id}
                    className="item"
                    onClick={() => selectLocation(location)}
                >
                    <div>
                        <CircleFlag
                            countryCode={countryCode || ""}
                            width="30"
                            height="30"
                        />
                        <span>{location.name}, </span>
                        <span>{location.admin1}, </span>
                        <span>{location.country}, </span>
                        <span>{location.country_code}, </span>
                    </div>
                    <div>
                        <span>(lat: {location.latitude}, lon: {location.longitude}, elevation: {location.elevation}m )</span>
                    </div>
                    <div>{location.timezone}</div>
                </li>
            );
        });

        return <ul className="list">{list}</ul>;
};

export default GeocodingResults;