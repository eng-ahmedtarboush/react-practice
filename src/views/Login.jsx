import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    let onSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">login into your account</h1>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button className="btn btn-block">login</button>
                    <p className="message">
                        not register <Link to="/signup">create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
