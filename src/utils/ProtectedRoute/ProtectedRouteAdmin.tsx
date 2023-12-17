import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { getToken } from "../../services/Token/TokenStorage";

const ProtectedRoute = (props:any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = getToken("admin");
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
        </>
    );
}
export default ProtectedRoute;