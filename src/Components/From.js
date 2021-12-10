import React from 'react';
import PropTypes from 'prop-types';



function From() {
    return (
        <div>
            <form action="/" method="get">
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">From</span> */}
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Steam ID"
            name="s" 
        />
        <button type="Search">Search</button>
    </form>

        </div>
    );
}

export default From;

