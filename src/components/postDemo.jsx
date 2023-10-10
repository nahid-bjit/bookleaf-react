import React from "react";
import { useForm } from "react-hook-form";
import useProductHook from "../hooks/useProductHook";
import "./postDemo.css"; // Import the CSS file


const PostDemo = () => {
    const { createPost } = useProductHook();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, // Access validation errors
    } = useForm();

    const onSubmit = (data) => {
        createPost(data);
        reset(); // Reset the form after creating a post
    };

    return (
        <div className="post-data">
            <h1>Post Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        {...register("title", {
                            required: "Title is required",
                            minLength: {
                                value: 3,
                                message: "Title must be at least 3 characters",
                            },
                            maxLength: {
                                value: 15,
                                message: "Title cannot exceed 15 characters",
                            },
                        })}
                    />
                    {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Enter description"
                        {...register("description", {
                            required: "Description is required",
                            minLength: {
                                value: 5,
                                message: "Description must be at least 5 characters",
                            },
                            maxLength: {
                                value: 50,
                                message: "Description cannot exceed 50 characters",
                            },
                        })}
                    />
                    <p className="error">
                        {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                    </p>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default PostDemo;
