// // ProductCard.jsx

// import React from "react";
// import "./ProductCard.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import AddToCartButton from "./AddToCartButton";
// import { addToCart } from '../store/cartActions'; // Import your cart action
// import useProductHook from "../hooks/useProductHook";
// import bookImage from "../assets/1.jpg"

// const ProductCard = ({ product }) => {
//     const user = useSelector((state) => state.auth.user);
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // Get the dispatch function
//     const { deleteBook } = useProductHook();

//     const handleEditClick = () => {
//         navigate(`/edit-book/${product._id}`);
//     };

//     const handleDeleteClick = async (bookId) => {
//         const confirm = window.confirm("Do you want to delete this book?");
//         if (confirm) {
//             console.log("delete");
//             await deleteBook(bookId);
//         } else {
//             console.log("No", bookId);
//         }
//     };

//     const handleAddToCart = () => {
//         if (user) {
//             // If the user is logged in, dispatch the addToCart action with the product
//             dispatch(addToCart(product));
//         } else {
//             // If the user is not logged in, redirect them to the login route
//             navigate('/user/login');
//         }
//     };

//     return (
//         <div className="card">
//             <div className="card-body">
//                 <img className="card-img" src={bookImage} alt="" />
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 {user && user.role === 1 ? (
//                     <div className="button-group">
//                         <button onClick={handleEditClick}>Edit</button>
//                         <button
//                             onClick={() => {
//                                 handleDeleteClick(product._id);
//                             }}
//                             className="delete-button"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ) : (
//                     <button onClick={handleAddToCart}>Add to Cart</button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCard;
import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCartButton from "./AddToCartButton";
import { addToCart } from '../store/cartActions';
import useProductHook from "../hooks/useProductHook";
import bookImage from "../assets/1.jpg";

const ProductCard = ({ product }) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { deleteBook } = useProductHook();

    const handleEditClick = () => {
        navigate(`/edit-book/${product._id}`);
    };

    const handleDeleteClick = async (bookId) => {
        const confirm = window.confirm("Do you want to delete this book?");
        if (confirm) {
            try {
                await deleteBook(bookId);
                toast.success('Book deleted successfully!');
            } catch (error) {
                toast.error('Failed to delete the book');
            }
        }
    };

    const handleAddToCart = () => {
        if (user) {
            dispatch(addToCart(product));
            toast.success('Added to cart successfully!');
        } else {
            navigate('/user/login');
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={bookImage} alt="" />
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                {user && user.role === 1 ? (
                    <div className="button-group">
                        <button onClick={handleEditClick}>Edit</button>
                        <button
                            onClick={() => {
                                handleDeleteClick(product._id);
                            }}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
