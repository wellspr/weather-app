import { FC } from "react";
import { useLocation } from "~/context";

const Banner: FC = () => {

    const { selectedLocation, loadingGeolocation } = useLocation();
    
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