
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import UserCreatePage from "./pages/userCreate.page";
import UserLoginPage from "./pages/userLogin.page";
import NotFoundPage from "./pages/notFound.page";
import AddBooksPage from "./pages/addBooks.page";
import EditBookPage from "./pages/editBooks.page";
import DeleteBook from "./components/deleteBook";
import Authenticate from "./components/Authenticate";
import store from "./store/store";
import { Provider } from 'react-redux'; // Make sure you import 'Provider' correctly
import Cart from './components/Cart'; // Import the Cart component
import CheckoutPage from "./components/CheckoutPage";
import Footer from "./components/footer";


function App() {

  return (
    <div>
      {/* Your existing content */}
      <Provider store={store}>
        <BrowserRouter>
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
        <Footer />
      </Provider>

    </div >
  );
}

export default App;
