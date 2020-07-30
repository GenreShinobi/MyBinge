import React, { useCallback } from "react";
import fire from "../config/fire";

const Login = () => {
    const handleLogin = useCallback( async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <form className="form-inline my-2 my-lg-0" id="login" autoComplete="off" onSubmit={handleLogin}>
            <input className="d-none" name="search" type="search" placeholder="Search" aria-label="Search" autoComplete="off" />
            <input className="form-control mr-sm-2" id="email" name="email" type="email" placeholder="Email" aria-label="Email" autoComplete="off"/>
            <input className="form-control mr-sm-2" id="password" name="password" type="password" placeholder="Password" aria-label="Password" autoComplete="off"/>
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Log In</button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => fire.auth().createUserWithEmailAndPassword(document.getElementById("email").value,document.getElementById("password").value)}>Register</button>
        </form>
    );
}

export default Login;