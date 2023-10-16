import React, { useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance'; // Import your axiosInstance
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendPasswordResetEmail = async () => {
        try {
            // setIsLoading(true);

            // const response = await axiosInstance.post('/mail/send', {
            //     recipient: email
            // });

            // if (response.status === 200) {
            //     alert('Password reset email sent successfully.');
            //     // You can add more UI feedback here if needed.
            // } else {
            //     alert('Failed to send password reset email.');
            //     // Handle the error or provide user feedback.
            // }
            axiosInstance
                .post("/auth/forget-password", { email })
                .then((res) => res.data)
                .then((data) => {
                    console.log(data);
                    toast.success(data.message);
                    // bottomEndToast.fire({ icon: "success", title: data.message });
                    // navigate("/");
                })
                .catch((e) => {
                    console.log(e);
                    let message = "";
                    if (e?.response?.data?.message) {
                        message = e?.response?.data?.message;
                    } else {
                        message = "Failed to load!";
                        toast.error(message);
                    }
                    //  bottomEndToast.fire({ icon: "error", title: message });
                })
                .finally(() => {
                    // setIsLoading(false);
                });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
            toast.error('An error occurred while sending the email.');
            // Handle the error or provide user feedback.
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-parent">
            <h1>Forgot Password</h1>
            <div>
                <h4>Email</h4>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={sendPasswordResetEmail} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Confirm'}
            </button>
            <a href="/user/login">Back to Login</a>
        </div>
    );
}

export default ForgotPasswordForm;
