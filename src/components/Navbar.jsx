import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { loginStart, logout } from '../store/slices/authSlice';
import { fetchUserCart } from '../store/cartActions';

function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const user = useSelector((state) => state.auth.user);
    // const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(loginStart());
        navigate('/user/login');
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleFetchUserCart = () => {
        if (user) {
            // Make sure to pass the user's ID to fetchUserCart action
            console.log("id: ", user.user)
            dispatch(fetchUserCart(user.user));
            console.log("navbar e ki return astese: ", (dispatch(fetchUserCart(user.user))))
        } else {
            // If the user is not logged in, redirect them to the login route
            navigate('/user/login');
        }
    }


    return (
        <nav className="navbar">
            <div className="container">
                <h1>BookLeaf</h1>
                <ul className="nav-menu">
                    <Link to="/cart" onClick={handleFetchUserCart}>
                        Cart ({cartItems.length})
                    </Link>
                    <li>
                        <Link to="/homepage">Home</Link>
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


// import React, { useEffect } from 'react';
// import './Navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { loginStart, logout } from '../store/slices/authSlice';
// import { fetchUserCart } from '../store/cartActions';

// function Navbar() {
//     const cartItems = useSelector((state) => state.cart.items);
//     const user = useSelector((state) => state.auth.user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogin = () => {
//         dispatch(loginStart());
//         navigate('/user/login');
//     };

//     const handleLogout = () => {
//         dispatch(logout());
//     };

//     useEffect(() => {
//         // Fetch the user's cart data when the Navbar component mounts, if the user is logged in
//         if (user) {
//             dispatch(fetchUserCart(user.user)); // Assuming the user ID is stored in user._id
//         }
//     }, [dispatch, user]);

//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <h1>BookLeaf</h1>
//                 <ul className="nav-menu">
//                     <li>
//                         <Link to="/cart">Cart ({cartItems.length})</Link>
//                     </li>
//                     <li>
//                         <Link to="/homepage">Home</Link>
//                     </li>
//                     {user && user.role === 1 && ( // Check if the user is admin
//                         <li>
//                             <Link to="/books/add">Add Books</Link>
//                         </li>
//                     )}

//                     {!user && ( // Check if the user is admin
//                         <li>
//                             <Link to="/user/create">Sign-up</Link>
//                         </li>
//                     )}

//                     {user ? (
//                         <li>
//                             <h1>Welcome, {user.email}!</h1>
//                             <button onClick={handleLogout}>Logout</button>
//                         </li>
//                     ) : (
//                         <li>
//                             <button onClick={handleLogin}>Login</button>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
