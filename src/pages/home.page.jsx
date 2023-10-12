import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostDemo from "../components/postDemo";
import FetchDemo from "../components/fetchDemo";
import DebounceDemo from "../components/debounceDemo";
import { useSelector } from 'react-redux'; // Import useSelector

export const ProductContext = createContext();

const HomePage = () => {

  console.log("came here after the successfull log in")
  const user = useSelector(state => state.auth.user); // Access user data from Redux store

  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <div>
      <Navbar />
      <DebounceDemo />

      <p>before fetching data</p>
      <script>
        console.log("before fetching data")
      </script>

      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <FetchDemo />
        <p>after fetching data</p>
      </ProductContext.Provider>
    </div>
  );
};

export default HomePage;
