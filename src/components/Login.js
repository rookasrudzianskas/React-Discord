import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";
import {auth} from "../firebase";
import {provider} from "../firebase";

const Login = () => {

    const signIn = () => {
        // do clever google login magic

        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://play-lh.googleusercontent.com/GedBUrd46najAuenCvblsorvr85uFsEb1azoZ1YUBIIfRbUQqhxkT7cpErq4XCI-u9GQ" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;
