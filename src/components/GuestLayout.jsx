import React from "react";
import { Navigate, Outlet } from "react-router";
import { useStateContext } from "../context/ContextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();
    console.log(token);
    if (token) {
        return <Navigate to="/users" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
