import React from "react";
import { MainWarp, ButtonGroup } from "./style"

const Login = ({ setSignIn }) => {
    return (
        <MainWarp>
            <h1>- 회원 가입 -</h1>
            <div>
                <label>ID : </label>
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
                <button onClick={setSignIn(true)}>회원 가입</button>
                <button>홈으로</button>
            </ButtonGroup>

        </MainWarp>
    );

}

export default Login;