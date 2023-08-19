import { type V2_MetaFunction } from "@remix-run/node";
import Homepage from "~/pages/Homepage";

export const meta: V2_MetaFunction = () => {
    return [
        { title: "Weather App" },
        { name: "description", content: "Welcome to the Weather App!" },
    ];
};

export default function Index() {
    return (
        <Homepage />
    );
}
