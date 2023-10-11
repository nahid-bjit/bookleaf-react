import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/authSlice';
import '../components/loginForm.css';
import CustomPassword from "../components/customPassword.component";
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import Navbar from "../components/Navbar";
import axiosInstance from "../utils/axiosInstance";


const UserLoginPage = () => {
  const navigate = useNavigate(); // Initialize useHistory

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      console.log("response: ------------v", response.data)
      // Send a POST request to your backend for authentication
      const response = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      })


      //   response.then(data => data.data).then(x => console.log('mkj ', x))

      if (response.status === 200) {
        // Authentication successful
        // You can perform actions such as storing tokens, updating Redux store, etc.
        console.log("Login successful");
        console.log(email, password);
        //  console.log("response: ------------v", response)
        localStorage.setItem("token", response.token)

        dispatch(loginUser({ email, password }));
        toast.success('Login successful', { position: toast.POSITION.TOP_RIGHT });

        // Redirect to the homepage
        navigate("/homepage"); // Use history for redirection
      } else {
        // Authentication failed, handle error
        toast.error('Authentication failed. Please check your credentials.', { position: toast.POSITION.TOP_RIGHT });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error('An error occurred during login.', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  const handlerOnSubmit = () => {

    const email = getValues("email");
    const password = getValues("password");
    console.log("response: ------------v", email, password)
    handleLogin(email, password);
    console.log("response: ------------v", email, password)
  };




  return (

    <div>

      <Navbar />

      <div className="form-parent">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handlerOnSubmit)}>
          <div>
            <h4>Email</h4>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input placeholder="Enter email" {...field} />
              )}
            />
          </div>

          <div>
            <h4>Password</h4>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum length must be 6",
                },
                maxLength: {
                  value: 20,
                  message: "Max length must be 20",
                },
              }}
              render={({ field }) => (
                <CustomPassword fields={field} placeholder="Enter Password" />
              )}
            />
            {errors.password && <h5>{errors.password.message}</h5>}
          </div>

          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>

    </div>


  );
};

export default UserLoginPage;
