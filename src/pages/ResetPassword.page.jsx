import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/authSlice';
import '../components/loginForm.css';
import CustomPassword from "../components/customPassword.component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { axiosInstance } from "../utils/axiosInstance";



const ResetPassword = () => {
    const navigate = useNavigate();
    const { token, userId } = useParams();

    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const dispatch = useDispatch();


    // const handleLogin = async (email, password) => {
    //     try {
    //         const response = await axiosInstance.post(`/auth/login`, {
    //             email,
    //             password,
    //         })



    //         if (response.status === 200) {

    //             localStorage.setItem("token", response.data.data.token)

    //             dispatch(loginUser({ email, password }));
    //             toast.success('Login successful', { position: toast.POSITION.TOP_RIGHT });

    //             // Redirect to the homepage
    //             navigate("/homepage");
    //         } else {
    //             toast.error('Authentication failed. Please check your credentials.', { position: toast.POSITION.TOP_RIGHT });
    //         }
    //     } catch (error) {
    //         console.error("Error during login:", error);
    //         toast.error('An error occurred during login.', { position: toast.POSITION.TOP_RIGHT });
    //     }
    // };

    const handlerOnSubmit = () => {

        const password = getValues("password");
        const confirmPassword = getValues("confirmPassword");

        // e.preventDefault();
        // setIsLoading(true);
        axiosInstance
            .post("/auth/reset-password", { token, userId, newPassword: password, confirmPassword })
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                //bottomEndToast.fire({ icon: "success", title: data.message });
                // navigate("/");
            })
            .catch((e) => {
                console.log(e);
                let message = "";
                if (e?.response?.data?.message) {
                    message = e?.response?.data?.message;
                } else {
                    message = "Failed to load!";
                }
                // bottomEndToast.fire({ icon: "error", title: message });
            })
            .finally(() => {
                // setIsLoading(false);
            });


    };

    return (

        <div>

            <Navbar />
            <div className="form-parent">
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit(handlerOnSubmit)}>

                    <div>
                        <h4>New Password</h4>
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

                    <div>
                        <h4>Confirm Password</h4>
                        <Controller
                            name="confirmPassword"
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

                    <button type="submit">Reset Password</button>

                    <a href="/user/login">Sign In</a>
                </form>

            </div>

        </div>


    );
};

export default ResetPassword;
