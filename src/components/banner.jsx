import React from 'react';
import "./banner.css"
import bannerImage from "../assets/banner.png"

const Banner = () => {
    return (
        <div className="banner">
            <img
                src={bannerImage}
                alt="Book Banner"
                className="book-image"
            />
        </div>
    );
};

export default Banner;
