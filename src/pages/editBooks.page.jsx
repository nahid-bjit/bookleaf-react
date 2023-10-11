import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useProductHook from "../hooks/useProductHook";
import Navbar from "../components/Navbar";

const EditBookPage = () => {
    const { _id } = useParams();
    const { updateBook } = useProductHook(); // Assuming you have a function to update the product
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await updateBook(_id, data); // Make sure to use _id to specify which book to update
            // You can add success handling, such as a success message or redirect to another page
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="edit-data">
                <h1>Edit Data</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title")} type="text" placeholder="Title" />
                    <input {...register("description")} type="text" placeholder="Description" />
                    <button type="submit">Update</button>
                </form>
            </div>

        </div>

    );
};

export default EditBookPage;
