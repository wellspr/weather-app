import React, { useState } from "react";

interface SearchBarProps {
    fetchGeocodingData: ({ searchTerm }: { searchTerm: string }) => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchGeocodingData }) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="search-bar">
            <input
                type="text"
                name="location"
                id="location_id"
                className="input input__search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button
                className="button button__search"
                onClick={() => fetchGeocodingData({ searchTerm })}
                type="submit"
            >
                Go
            </button>
        </div>
    );
};

export default SearchBar;