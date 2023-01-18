import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const phoneRef = useRef();
    const passwordConfirmRef = useRef();
    const { setUser, setToken } = useStateContext;
    let onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
            phone_number: phoneRef.current.value,
        };
        axiosClient
            .post("/auth/register", payload)
            .then((response) => {
                console.log(response);
                // setToken(response.data.token);
                // setUser(response.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">signup for free</h1>
                    <input ref={nameRef} type="text" placeholder="ful name" />
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="email address"
                    />
                    <input
                        ref={phoneRef}
                        type="text"
                        placeholder="phone number"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="password"
                    />
                    <input
                        ref={passwordConfirmRef}
                        type="password"
                        placeholder="password confirmation"
                    />
                    <button className="btn btn-block">signup</button>
                    <p className="message">
                        already registered <Link to="/login">sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
