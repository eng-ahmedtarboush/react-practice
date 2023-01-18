import React from "react";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }
    const onLogout = (ev) => {
        ev.preventDefault();
    };
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
