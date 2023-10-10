import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ProductCard from "./ProductCard";

const DebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [productData, setProductData] = useState([]);

  const callProductApi = () => {
    axiosInstance
      .get(`/all/?search=${searchTerm}`)
      .then((resp) => resp.data)
      .then((data) => {
        //  console.log("Data: ", data);
        //  console.log("Data books: ", data.data.books);
        setProductData(data.data.books);
        return data;
      })
      .catch((err) => {
        setErrorMsg("Some error occurred");
        return "Some error";
      })
      .finally(() => { });
  };

  useEffect(() => {
    console.log("Search Term: ", searchTerm);

    const timeOutFunc = setTimeout(() => {
      callProductApi();
    }, 0);

    return () => clearTimeout(timeOutFunc);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search for books</h1>
      <input
        placeholder="Search for books"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h4>Fetched Books:</h4>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        {errorMsg && <h4>Error: {errorMsg}</h4>}
      </div>
    </div>
  );
};

export default DebounceDemo;
