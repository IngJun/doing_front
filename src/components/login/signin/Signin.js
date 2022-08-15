import React from "react";
import { MainWarp } from "./style"
const Signin = ({ clickbtn }) => {

    return (
        <MainWarp>
            <h1>-회원가입-</h1>
            <div>
                <label>I   D :
                    <input type="text" />
                </label>
                <button>확인</button>
                <p>사용할 수 있는 아이디입니다.</p>
            </div>
            <div>
                <label>PW :
                    <input type="password" />
                </label>
                <p>사용 가능한 비밀번호 입니다.</p>
            </div>
            <div>
                <label>PW :
                    <input type="password" />
                </label>
                <p>비밀 번호가 일치하지 않습니다</p>
            </div>
            <div>
                <label>닉네임 :
                    <input type="text" />
                </label>
            </div>
            <div>
                <button onClick={clickbtn}>회원가입</button>
                <button onClick={clickbtn}>취소</button>
            </div>
        </MainWarp>
    );
}

export default Signin;