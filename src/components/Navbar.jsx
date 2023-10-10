import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useSelector, useDispatch } from 'react-redux';
import { loginStart, logout } from '../store/slices/authSlice';

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogin = () => {
        // Simulate a user login action by dispatching the loginStart action.
        dispatch(loginStart());
        // Navigate to the login page when the "Login" button is clicked
        navigate('/user/login');
    };

    const handleLogout = () => {
        // Simulate a user logout action by dispatching the logout action.
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <div className="container">
                <h1>BookLeaf</h1>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Books</Link>
                    </li>
                    <li>
                        <Link to="/user/create">Sign-up</Link>
                    </li>
                    {user ? (
                        <li>
                            <h1>Welcome, {user.email}!</h1>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={handleLogin}>Login</button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
