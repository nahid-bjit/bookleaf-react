import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Authenticate() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const isAdmin = user && user.role === 1;

    useEffect(() => {
        if (!user) {
            navigate('/user/login');
        }
    }, [user, navigate]);

    if (isAdmin) {
        return <Outlet />;
    }

    return <p>Unauthorized Access</p>;
}

export default Authenticate;
