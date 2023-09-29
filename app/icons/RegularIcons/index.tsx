import { FC } from "react";

const arrowDown = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-arrow-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 13l-6 6" />
            <path d="M6 13l6 6" />
        </svg>
    );
};

const arrowUp = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-arrow-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 11l-6 -6" />
            <path d="M6 11l6 -6" />
        </svg>
    );
};

const caretLeft = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-caret-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 6l-6 6l6 6v-12" />
        </svg>
    );
};

const caretRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-caret-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 18l6 -6l-6 -6v12" />
        </svg>
    );
};

const loader = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler-loader"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l0 -3" />
            <path d="M16.25 7.75l2.15 -2.15" />
            <path d="M18 12l3 0" />
            <path d="M16.25 16.25l2.15 2.15" />
            <path d="M12 18l0 3" />
            <path d="M7.75 16.25l-2.15 2.15" />
            <path d="M6 12l-3 0" />
            <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
    );
};

const refresh = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-refresh"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </svg>
    );
};

const search = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
    );
};

const separator = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-separator"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12l0 .01" />
            <path d="M7 12l10 0" />
            <path d="M21 12l0 .01" />
        </svg>

    );
};

const tilde = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tilde"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3" />
        </svg>
    );
};

const x = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

type IconRegular =
    "arrow-down" |
    "arrow-up" |
    "caret-left" |
    "caret-right" |
    "loader" |
    "refresh" |
    "search" |
    "separator" |
    "tilde" |
    "x"
    ;


const Regular: FC<{ icon: IconRegular }> = ({ icon }) => {

    switch (icon) {
        case "arrow-down":
            return arrowDown();
        case "arrow-up":
            return arrowUp();
        case "caret-left":
            return caretLeft();
        case "caret-right":
            return caretRight();
        case "loader":
            return loader();
        case "refresh":
            return refresh();
        case "search":
            return search();
        case "separator":
            return separator();
        case "tilde":
            return tilde();
        case "x":
            return x();
        default:
            return null;
    }
};

export default Regular;