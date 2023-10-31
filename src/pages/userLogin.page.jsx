import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/authSlice';
import '../components/LoginForm.css';
import CustomPassword from "../components/customPassword.component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { axiosInstance } from "../utils/axiosInstance";


const UserLoginPage = () => {
  const navigate = useNavigate();

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
      const response = await axiosInstance.post(`/auth/login`, {
        email,
        password,
      })



      if (response.status === 200) {

        localStorage.setItem("token", response.data.data.token)

        dispatch(loginUser({ email, password }));
        toast.success('Login successful', { position: toast.POSITION.TOP_RIGHT });

        // Redirect to the homepage
        navigate("/homepage");
      } else {
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

    handleLogin(email, password);

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

          <a href="/forgot-password">Forgotten Password</a>
        </form>

      </div>

    </div>


  );
};

export default UserLoginPage;
