import localforage from "localforage";
import { FC, useState } from "react";
import { Location } from "~/types/types";

interface SavedLocationsProps {
    selectLocation: (location: Location) => void;
}

const SavedLocations: FC<SavedLocationsProps> = ({ selectLocation }) => {

    const [locations, setLocations] = useState<Location[] | null>(null);

    const getLocations = async () => {
        const cached: Location[] | null = await localforage.getItem("locations", err => console.log(err));
        setLocations(cached);
    };

    return (
        <div className="saved-locations">
            <button onClick={() => getLocations()}>Saved locations</button>
            <ul className="list">
                {
                    locations?.map(location => {
                        return (
                            <li
                                key={location?.id}
                                className="item"
                                onClick={() => selectLocation(location)}
                            >
                                <p>{location?.name}, {location?.admin1}, {location?.country_code}</p>
                                <span>(lat: {location?.latitude}, lon: {location?.longitude}, elevation: {location?.elevation}m )</span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default SavedLocations;