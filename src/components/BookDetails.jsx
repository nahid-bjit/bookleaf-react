// ProductCard.jsx

import React from "react";
import "./ProductCard.css";

const BookDetails = ({ product }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    );
};

export default BookDetails;
