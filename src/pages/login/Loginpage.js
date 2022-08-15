import React from "react";
import Login from "../../components/login/login/Login";
import Signin from "../../components/login/signin/Signin";
import Header from "../../components/header";
import { MainWarp } from "./style";
import { useState } from "react";
const Loginpage = () => {

    const [isSignIn, setSignIn] = useState(false);
    const clickbtn = () => {
        setSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />

            {!isSignIn ? <Login clickbtn={clickbtn} /> : <Signin clickbtn={clickbtn} />}

        </div>
    );
}

export default Loginpage;