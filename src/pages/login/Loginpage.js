import React from "react";
import Login from "../../components/login/login/Login";
import Signin from "../../components/login/signin/Signin";
import Header from "../../components/header";
import { MainWarp } from "./style";
import { useState } from "react";
const Loginpage = () => {

    const isSignIn = useState(false);
    return (
        <div>
            <Header />
            <MainWarp>
                {isSignIn ? <Login /> : <Signin />}
            </MainWarp>
        </div>
    );
}

export default Loginpage;