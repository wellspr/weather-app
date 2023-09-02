import localforage from "localforage";
import { FC, useEffect, useState } from "react";
import { useLocation } from "~/context";
import { Location } from "~/types/types";
import { useSearchBarContext } from "./SearchWeather";

const SavedLocations: FC = () => {

    const { setShowSearchBar } = useSearchBarContext();
    const { selectLocation } = useLocation();
    const [locations, setLocations] = useState<Location[] | null>(null);
    
    const getLocations = async () => {
        const cached: Location[] | null = await localforage.getItem("locations");
        setLocations(cached);
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="saved-locations">
            <ul className="list">
                {
                    locations?.map(location => {
                        return (
                            <li
                                key={location?.id}
                                className="item"
                                onClick={() => {
                                    selectLocation(location);
                                    setShowSearchBar(false);
                                }}
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