import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authcontext';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated)

    if (!isAuthenticated) {
        return <Navigate to="/" />; 
    }

    return (
        <Outlet />
    );
};

export default ProtectedRoute;
