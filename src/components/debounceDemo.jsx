import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import ProductCard from "./ProductCard";

const DebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [productData, setProductData] = useState([]);

  const callProductApi = () => {
    if (searchTerm) {
      axiosInstance
        .get(`/books/all/?search=${searchTerm}`)
        .then((resp) => resp.data)
        .then((data) => {
          setProductData(data.data.books);
          return data;
        })
        .catch((err) => {
          setErrorMsg("Some error occurred");
          return "Some error";
        })
        .finally(() => { });
    } else {
      setProductData([]);
    }
  };

  useEffect(() => {
    console.log("Search Term: ", searchTerm);

    const timeOutFunc = setTimeout(() => {
      callProductApi();
    }, 2000);

    return () => clearTimeout(timeOutFunc);
  }, [searchTerm]);

  return (
    <div>
      <input
        placeholder="Search for books"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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

