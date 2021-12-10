import React from 'react';
import "./Input.css";

function loading() {
    return (
        // Loading animation
        <div>
            <h1 className='loadingMessage'>Searching</h1>
            <div className = "loading"></div>
            <div className = "loading"></div>
            <div className = "loading"></div>
            <div className = "loading"></div>
        </div>
    );
}

export default loading;