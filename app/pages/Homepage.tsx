// React
import { FC } from "react";

// Components
import Banner from "~/components/Banner";
import CurrentWeather from "~/components/CurrentWeather";
import HourlyPreview from "~/components/HourlyPreview";
import DailyPreview from "~/components/DailyPreview";
import SearchWeather from "~/components/SearchWeather";
import Plot from "~/plots/Plot";

const Homepage: FC = () => {
    return (
        <div className="homepage">
            <Banner />
            <SearchWeather />
            <CurrentWeather />
            <HourlyPreview />
            <DailyPreview />
        </div>
    );
};

export default Homepage;