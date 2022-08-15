import React from "react";
import { MainWarp, ButtonGroup } from "./style"
import { Link, useNavigate } from "react-router-dom";
const Login = ({ clickbtn }) => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <MainWarp>
            <h1>- 로그인 -</h1>
            <div>
                <label>I D : </label>
                <input></input>
            </div>
            <div>
                <label>PW : </label>
                <input></input>
            </div>
            <div>
                <button>구글</button>
                <button>카카오</button>
                <button>네이버</button>
            </div>
            <ButtonGroup>
                <button>로그인 하기</button>
                <button onClick={clickbtn}>회원 가입</button>
                <button onClick={goToHome}>홈으로</button>
            </ButtonGroup>

        </MainWarp >
    );

}

export default Login;