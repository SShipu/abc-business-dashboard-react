// SearchResults.js
import React from "react";
import PropTypes from 'prop-types';

const SearchResults = ({query}) => {
    return (
        <div
            className="body w-100 overflow-scroll p-4"
        >
            {/* Search content */}
            <h4 style={{ fontSize: "22px" }}>Search Result</h4>
            <div className="d-flex justify-content-between align-items-center mt-4">
                {query}
            </div>
            
        </div>
    );
};

SearchResults.propTypes = {
    query: PropTypes.string.isRequired,
};

export default SearchResults;
