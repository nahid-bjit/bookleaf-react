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
            const response = await axiosInstance.get(`/books/all`); // Use the Axios instance with the base URL
            console.log("Data: ", response.data);
            setProductData(response.data.data.books);
            setLoading(false);
        } catch (error) {
            //console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    // const getBookById = async (id) => {
    //     setLoading(true);

    //     try {
    //         const response = await axiosInstance.get(`/detail/${_id}`); // Replace with your endpoint for fetching a single book
    //         return response.data.data; // Assuming the response contains the book data
    //     } catch (error) {
    //         console.error("Error fetching book data:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const getBookById = async (id) => {


        try {
            setLoading(true);
            console.log("id: ", id)

            const response = await axiosInstance.get(`/books/detail/${id}`); // Use the Axios instance with the base URL
            console.log("Data: ", response.data);
            setLoading(false);

            if (response.data) {
                return response.data; // Assuming the response contains the book data
            } else {
                console.error("Book not found");
            }
        } catch (error) {
            console.error("Error fetching book data:", error);
        } finally {
            setLoading(false);
        }
    };


    const createPost = (formData) => {
        setLoading(true);
        console.log("The form data ", formData);

        axiosInstance
            .post("/books/add", formData) // Assuming "/add" is the endpoint for creating a post
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

    const updateBook = async (id, bookData) => {
        setLoading(true);

        try {
            const response = await axiosInstance.patch(`/books/update/${id}`, bookData);
            console.log("Updated Book Data: ", response.data);
            // Optionally, you can update the productData with the new data if needed
            // setProductData((prevData) => {
            //   const updatedData = prevData.map((book) => {
            //     if (book._id === id) {
            //       return { ...book, ...bookData };
            //     }
            //     return book;
            //   });
            //   return updatedData;
            // });
        } catch (error) {
            console.error("Error updating book:", error);
        } finally {
            setLoading(false);
        }
    };


    // const updatePost = (postId, formData) => {
    //     setLoading(true);
    //     fetch(`http://localhost:8000/books/update/${id}`, {
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

    const deleteBook = async (productId) => {
        setLoading(true);
        try {
            // Make a DELETE request to the backend to delete the book by its ID
            const response = await axiosInstance.delete(`/delete/${productId}`);
            if (response.status === 200) {
                // If the request is successful, update the product data
                setProductData((prevData) => prevData.filter((book) => book._id !== productId));
            } else {
                console.error("Error deleting product:", response.data.message);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        } finally {
            setLoading(false);
        }
    };
    return { productData, loading, setLoading, createPost, getBookById, updateBook, deleteBook };
};

export default useProductHook;
