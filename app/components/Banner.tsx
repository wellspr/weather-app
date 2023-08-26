import { FC } from "react";
import { SelectedLocation } from "~/types/types";

interface BannerProps {
    loadingGeolocation: boolean;
    selectedLocation: SelectedLocation;
}

const Banner: FC<BannerProps> = ({ loadingGeolocation, selectedLocation }) => {

    return (
        <div className="banner banner__current-location">
            {
                (loadingGeolocation || !selectedLocation) ?
                    <p>Fetching position...</p> :
                    <p>
                        {selectedLocation?.name}{", "}
                        {selectedLocation?.country}
                        ({selectedLocation?.latitude}, {selectedLocation?.longitude})
                    </p>
            }
        </div>
    );
};

export default Banner;