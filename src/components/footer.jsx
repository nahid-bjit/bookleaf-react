import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>BookLeaf</h2>
                        <p>Your Online Bookstore</p>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/user/login">Login</a></li>
                            <li><a href="/user/create">Signup</a></li>
                            <li><a href="/cart">Cart</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <h3>Connect with Us</h3>
                    <div className="social-icons">
                        <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BookLeaf. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
