import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosInstance"; // Import your Axios instance
// import { ProductContext } from "../App";

const useProductHook = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const { fetchReload, setFetchReload } = useContext(ProductContext);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axiosInstance.get("/all"); // Use the Axios instance with the base URL
            console.log("Data: ", response.data);
            setProductData(response.data.data.books);
            setLoading(false);
        } catch (error) {
            //console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    const createPost = (formData) => {
        setLoading(true);
        console.log("The form data ", formData);

        axiosInstance
            .post("/add", formData) // Assuming "/add" is the endpoint for creating a post
            .then((resp) => resp.data)
            .then((data) => {
                console.log("Successfully created", data);
                setFetchReload(true);
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            })
            .finally(() => setLoading(false));
    };


    // const updatePost = (postId, formData) => {
    //     setLoading(true);
    //     fetch(`http://localhost:8000/books/update/${productId}`, {
    //         method: "PUT", // Use PUT for updates
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log("Successfully updated", data);
    //             fetchData(); // Refresh data after updating
    //         })
    //         .catch((error) => {
    //             console.error("Error updating post:", error);
    //         })
    //         .finally(() => setLoading(false));
    // };

    // const deletePost = (productId) => {
    //     setLoading(true);
    //     fetch(`http://localhost:8000/books/delete/${productId}`, {
    //         method: "DELETE",
    //     })
    //         .then((resp) => {
    //             if (!resp.ok) {
    //                 throw new Error("Delete request failed");
    //             }
    //             return resp.json();
    //         })
    //         .then((data) => {
    //             console.log("Successfully deleted", data);
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting product:", error);
    //         })
    //         .finally(() => setLoading(false));
    // };


    return { productData, loading, setLoading, createPost };
};

export default useProductHook;
