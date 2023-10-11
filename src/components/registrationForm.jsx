import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import './RegistrationForm.css';
import CustomPassword from "./customPassword.component";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
        watch,
        setValue,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    // const handlerOnSubmit = () => {
    //     console.log("Form is submitted ");

    //     const userData = {
    //         userName: getValues("username"),
    //         email: getValues("email"),
    //         password: getValues("password"),
    //     };

    //     const firstName = getValues("firstname");
    //     const lastName = getValues("lastname");

    //     setValue("fullname", `${firstName} ${lastName}`);

    //     console.log("The user data", userData);
    // };
    const handlerOnSubmit = async (data) => {
        try {
            console.log("signup data", data)
            // Make an API request to your backend using axiosInstance
            const response = await axiosInstance.post('/auth/sign-up', data);

            if (response.status === 200) {
                // Registration was successful
                // You can redirect the user to a success page or perform other actions
            } else {
                // Handle registration errors here, such as displaying an error message
            }
        } catch (error) {
            // Handle network errors or server errors
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        console.log("Errors: ", errors);
    }, [errors]);

    return (
        <div className="form-parent">
            <h1>Register Yourself</h1>
            <form onSubmit={handleSubmit(handlerOnSubmit)}>
                <div>
                    <h4>Username</h4>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: "Username is required",
                            minLength: {
                                value: 5,
                                message: "Minimum length must be 6",
                            },
                            maxLength: {
                                value: 20,
                                message: "Minimum length must be 20",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter username"
                                {...field}
                                style={{ border: errors.username ? "1px solid red" : "" }}
                            />
                        )}
                    />
                    {errors.username && <h5>{errors.username.message}</h5>}
                </div>

                {/* <div>
                    <h4>FirstName</h4>
                    <Controller
                        name="firstname"
                        control={control}
                        rules={{
                            required: "FirstName is required",
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter FirstName"
                                {...field}
                                style={{ border: errors.firstname ? "1px solid red" : "" }}
                            />
                        )}
                    />
                    {errors.firstname && <h5>{errors.firstname.message}</h5>}
                </div> */}

                {/* <div>
                    <h4>LastName</h4>
                    <Controller
                        name="lastname"
                        control={control}
                        rules={{
                            required: "LastName is required",
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter LastName"
                                {...field}
                                style={{ border: errors.lastname ? "1px solid red" : "" }}
                            />
                        )}
                    />
                    {errors.lastname && <h5>{errors.lastname.message}</h5>}
                </div> */}
                {/* <div>
                    <h4>FullName</h4>
                    <Controller
                        name="fullname"
                        control={control}
                        render={({ field }) => (
                            <input
                                placeholder="Full Name"
                                {...field}
                                style={{ border: errors.lastname ? "1px solid red" : "" }}
                            />
                        )}
                    />
                    {errors.fullname && <h5>{errors.lastname.fullname}</h5>}
                </div> */}
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
                            // <input
                            //     placeholder="Enter Password"
                            //     type="password"
                            //     {...field}
                            //     style={{ border: errors.password ? "1px solid red" : "" }}
                            // />
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
                            required: "Confirm Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum length must be 6",
                            },
                            maxLength: {
                                value: 20,
                                message: "Max length must be 20",
                            },
                            validate: (value) =>
                                value === watch("password") ||
                                "Confirm password should match given password",
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter Password"
                                type="password"
                                {...field}
                                style={{
                                    border: errors.confirmPassword ? "1px solid red" : "",
                                }}
                            />
                        )}
                    />
                    {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
                </div>

                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default RegistrationForm;


