import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostDemo from "../components/postDemo";
import FetchDemo from "../components/fetchDemo";
import DebounceDemo from "../components/debounceDemo";
import { useSelector } from 'react-redux'; // Import useSelector

export const ProductContext = createContext();

const HomePage = () => {
  const user = useSelector(state => state.auth.user); // Access user data from Redux store

  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  return (
    <div>
      <Navbar />
      <DebounceDemo />

      {/* Display the user's name */}
      {/* <h1>Welcome, {user?.name}!</h1> */}
      {user ? <h1>Welcome, {user.role}!</h1> : <h1>Welcome!</h1>}

      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <FetchDemo />
      </ProductContext.Provider>
    </div>
  );
};

export default HomePage;
