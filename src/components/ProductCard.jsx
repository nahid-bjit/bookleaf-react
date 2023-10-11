// ProductCard.jsx

import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { addToCart } from '../store/cartActions'; // Import your cart action

const ProductCard = ({ product }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function

    const handleEditClick = () => {
        navigate(`/edit-book/${product._id}`);
    };

    const handleDeleteClick = () => {
        navigate(`/delete-book/${product._id}`);
    };

    const handleAddToCart = () => {
        // Dispatch the addToCart action with the product
        dispatch(addToCart(product));
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                {user && user.role === 1 ? (
                    <>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={handleDeleteClick}>Delete</button>
                    </>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
