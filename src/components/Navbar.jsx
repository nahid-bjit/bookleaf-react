import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginStart, logout } from '../store/slices/authSlice';

function Navbar() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(loginStart());
        navigate('/user/login');
    };

    const handleLogout = () => {
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
                    {user && user.role === 1 && ( // Check if the user is admin
                        <li>
                            <Link to="/books/add">Add Books</Link>
                        </li>
                    )}

                    {!user && ( // Check if the user is admin
                        <li>
                            <Link to="/user/create">Sign-up</Link>
                        </li>
                    )}

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
