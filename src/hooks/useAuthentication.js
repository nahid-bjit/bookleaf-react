// src/hooks/useAuthentication.js

import { useState, useEffect } from "react";

function useAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Implement your authentication logic here.
        // For example, check if the user has a valid token.
        const token = localStorage.getItem("authToken");

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }

        setIsLoading(false);
    }, []);

    return { isAuthenticated, isLoading };
}

export default useAuthentication;
