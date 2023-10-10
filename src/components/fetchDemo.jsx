import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";
import ProductCard from "./ProductCard";
import EditForm from "./EditForm";

const FetchDemo = () => {
    const { productData, loading, updatePost, deletePost } = useProductHook();

    // Use an object to store the editing state for each product
    const [editingProducts, setEditingProducts] = useState({});

    const handleUpdateProduct = (productId, formData) => {
        updatePost(productId, formData);
        // Clear the editing state for the specific product
        setEditingProducts((prevEditingProducts) => ({
            ...prevEditingProducts,
            [productId]: false,
        }));
    };

    const handleDeleteProduct = (productId) => {
        deletePost(productId);
    };

    const handleEditProduct = (productId) => {
        // Set the editing state for the specific product to true
        setEditingProducts((prevEditingProducts) => ({
            ...prevEditingProducts,
            [productId]: true,
        }));
    };

    return (
        <div>
            <h1>FetchDemo</h1>
            <h3>Products list:</h3>
            {loading === true && <h1>Loading...</h1>}
            <div className="card-container">
                {Array.isArray(productData) && productData.length > 0 ? (
                    productData.map((book) => (
                        <div key={book.id}>
                            {editingProducts[book.id] ? (
                                <EditForm
                                    product={book}
                                    onUpdate={(formData) =>
                                        handleUpdateProduct(book.id, formData)
                                    }
                                    onCancel={() => handleEditProduct(book.id)}
                                />
                            ) : (
                                <ProductCard
                                    product={book}
                                    onEdit={() => handleEditProduct(book.id)}
                                    onDelete={() => handleDeleteProduct(book.id)}
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default FetchDemo;
