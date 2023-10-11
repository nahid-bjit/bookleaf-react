// ProductCard.jsx

import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from 'react-redux';
//import { editProduct, deleteProduct } from '../store/actions'; // Import your Redux actions
import { useNavigate } from "react-router-dom";
import DeleteBook from "./deleteBook";

const ProductCard = ({ product }) => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditClick = () => {
        // console.log("id from productCard: ", product._id)
        // Assuming you have the updated product data in 'updatedProduct'
        navigate(`/edit-book/${product._id}`);
    };

    const handleDeleteClick = () => {
        // Pass the product ID to delete
        // DeleteBook(product._id)
        navigate(`/delete-book/${product._id}`);
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
                    <button>Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;

