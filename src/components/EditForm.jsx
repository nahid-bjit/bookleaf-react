import React, { useState } from "react";

const EditForm = ({ product, onUpdate, onCancel }) => {
    const [formData, setFormData] = useState({
        title: product.title,
        description: product.description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <button type="submit">Update</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default EditForm;
