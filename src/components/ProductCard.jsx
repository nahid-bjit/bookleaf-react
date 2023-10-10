import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onEdit, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(product.id);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button onClick={onEdit}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>

            </div>
        </div>
    );
};

export default ProductCard;
