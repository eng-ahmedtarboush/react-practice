import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(null);
    const { setUser, setToken } = useStateContext();
    let onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        // console.log(useStateContext());
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                let ourData = data.data;
                setToken(ourData.token);
                setUser(ourData.user);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setError(err.response.data.errors);
                // console.log(error);
            });
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">login into your account</h1>
                    {error && (
                        <div className="alert">
                            {Object.keys(error).map((key) => (
                                <p key={key}>{error[key][0]}</p>
                            ))}
                        </div>
                    )}
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="email address"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="password"
                    />
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
