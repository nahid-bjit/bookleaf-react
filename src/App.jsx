// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import HomePage from "./pages/home.page";
// import UserCreatePage from "./pages/userCreate.page";
// import UserLoginPage from "./pages/userLogin.page";
// import NotFoundPage from "./pages/notFound.page";
// import AddBooksPage from "./pages/addBooks.page";
// import Navbar from "./components/Navbar";
// import useAuthentication from "./hooks/useAuthentication"; // Your custom authentication hook
// import Authenticate from "./components/Authenticate";

// function App() {
//   const { isAuthenticated, isLoading } = useAuthentication();

//   if (isLoading) {
//     // Optionally, you can show a loading indicator while authentication is in progress.
//     return <div>Loading...</div>;
//   }

//   return (
//     <BrowserRouter>
// {/* <Navbar /> */}
// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/user/create" element={<UserCreatePage />} />
//   <Route path="/user/edit" element={<UserCreatePage />} />
//   <Route path="/user/login" element={<UserLoginPage />} />




//   <Route element={<Authenticate />} >
//     <Route path="/add" element={<AddBooksPage />} />
//   </Route>


//   <Route path="*" element={<NotFoundPage />} />
// </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import UserCreatePage from "./pages/userCreate.page";
import UserLoginPage from "./pages/userLogin.page";
import NotFoundPage from "./pages/notFound.page";
import AddBooksPage from "./pages/addBooks.page";
import EditBookPage from "./pages/editBooks.page";
import DeleteBook from "./components/deleteBook";

import Navbar from "./components/Navbar";
//import { useDispatch, useSelector } from 'react-redux';
// import { loginStart, logout } from './store/slices/authSlice';
import Authenticate from "./components/Authenticate";
import store from "./store/store";
import { Provider } from 'react-redux'; // Make sure you import 'Provider' correctly
import Cart from './components/Cart'; // Import the Cart component
import CheckoutPage from "./components/CheckoutPage";


function App() {
  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   // Simulate a user login action by dispatching the login action with a user object.
  //   dispatch(loginStart({ username: 'exampleuser' }));
  // };

  // const handleLogout = () => {
  //   // Simulate a user logout action by dispatching the logout action.
  //   dispatch(logout());
  // };

  return (
    <div>
      {/* Your existing content */}
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/user/create" element={<UserCreatePage />} />
            <Route path="/user/edit" element={<UserCreatePage />} />
            <Route path="/user/login" element={<UserLoginPage />} />
            <Route element={<Authenticate />} >
              <Route path="/books/add" element={<AddBooksPage />} />
            </Route>
            <Route path="/edit-book/:_id" element={<EditBookPage />} />
            <Route path="/delete-book/:_id" element={<DeleteBook />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div >
  );
}

export default App;
