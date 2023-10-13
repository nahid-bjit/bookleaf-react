import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostDemo from "../components/postDemo";
import FetchDemo from "../components/fetchDemo";
import DebounceDemo from "../components/debounceDemo";
import { useSelector } from 'react-redux';
import Banner from "../components/banner";

export const ProductContext = createContext();

const HomePage = () => {

  console.log("came here after the successfull log in")
  const user = useSelector(state => state.auth.user);

  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <div>
      <Navbar />
      <DebounceDemo />
      <Banner />

      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <FetchDemo />
      </ProductContext.Provider>
    </div>
  );
};

export default HomePage;
