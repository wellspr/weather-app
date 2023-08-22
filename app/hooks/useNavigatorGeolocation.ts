import { useEffect, useState } from "react";
import { ErrorMessage, Message } from "~/types/types";

/* Initial states */
const messageInitialState: Message = { fetchingPosition: false };

const errorMessageInitialState: ErrorMessage = {
    geolocationNotSupported: false,
    geolocationRetrievalError: false
};

export const useNavigatorGeolocation = () => {

    const [message, setMessage] = useState<Message>(messageInitialState);
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>(errorMessageInitialState);
    const [geolocation, setGeolocation] = useState<GeolocationPosition | null>(null);

    const locateMe = () => {
        setMessage({ ...message, fetchingPosition: true });

        if (!navigator.geolocation) {
            setErrorMessage({
                ...errorMessage,
                geolocationNotSupported: "Geolocation not supported."
            });
        } else {
            const success = (position: GeolocationPosition) => {
                setGeolocation(position);
                setMessage({ ...message, fetchingPosition: false });
            };

            const error = () => setErrorMessage({
                ...errorMessage,
                geolocationRetrievalError: "Unable to retrieve your location."
            });

            const config = {enableHighAccuracy: true, maximumAge: 10000, timeout: 5000};

            navigator.geolocation.getCurrentPosition(success, error, config);
        };
    };

    useEffect(() => { locateMe() }, []);  // Fetch geolocation data on load.

    return {
        loadingGeolocation: message.fetchingPosition,
        geolocation
    };
};