import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";
import { useParams } from "react-router-dom";

const DeleteBook = ({ }) => {
    const { _id } = useParams()
    const bookId = _id
    console.log("id from deleteBoook: ", bookId)
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { deleteBook } = useProductHook();

    const handleDeleteClick = () => {
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            console.log("book Id", bookId)
            await deleteBook(bookId);
            // Provide feedback to the user, e.g., display a success message or redirect
        } catch (error) {
            console.error("Error deleting book:", error);
            // Handle the error, e.g., display an error message
        } finally {
            setIsDialogOpen(false); // Close the delete confirmation dialog
        }
    };

    const handleCancelDelete = () => {
        setIsDialogOpen(false); // Close the delete confirmation dialog
    };

    return (
        <div>
            <button onClick={handleDeleteClick}>Delete</button>
            {isDialogOpen && (
                <div>
                    <p>Are you sure you want to delete this book?</p>
                    <button onClick={handleConfirmDelete}>Confirm</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default DeleteBook;