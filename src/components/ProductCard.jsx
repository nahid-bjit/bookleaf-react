// ProductCard.jsx

import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { addToCart } from '../store/cartActions'; // Import your cart action
import useProductHook from "../hooks/useProductHook";

const ProductCard = ({ product }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function
    const { deleteBook } = useProductHook();

    const handleEditClick = () => {
        navigate(`/edit-book/${product._id}`);
    };

    const handleDeleteClick = async (bookId) => {
        const confirm = window.confirm("Do you wanna delete this shit")
        if (confirm) {
            console.log("delete")
            await deleteBook(bookId);
        } else {
            console.log("No", bookId)
        }
        // navigate(`/delete-book/${product._id}`);
    };

    const handleAddToCart = () => {
        if (user) {
            // If the user is logged in, dispatch the addToCart action with the product
            dispatch(addToCart(product));
        } else {
            // If the user is not logged in, redirect them to the login route
            navigate('/user/login');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                {user && user.role === 1 ? (
                    <>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={() => {
                            handleDeleteClick(product._id)
                        }}>Delete</button>
                    </>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
