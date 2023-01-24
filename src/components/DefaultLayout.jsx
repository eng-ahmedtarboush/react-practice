import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
const DefaultLayout = () => {
    const { user, token, setUser } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    const onLogout = (ev) => {
        ev.preventDefault();
    };
    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            console.log(data);
        });
        return () => {};
    }, []);
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashbourd">Dashbourd</Link>
                <Link to="/users">users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>header</div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">
                            logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
