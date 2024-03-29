import appStyles from "./css/index.css";
import { type LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { LocationProvider, WeatherProvider } from "./context";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: appStyles }];
};

const App = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <WeatherProvider>
                    <LocationProvider>
                        <header className="header"></header>
                        <main className="main-component">
                            <Outlet />
                        </main>
                        <footer className="footer"></footer>
                    </LocationProvider>
                </WeatherProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html >
    );
};

export default App;