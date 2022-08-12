import React from "react";
import { HeaderWrapper, Navigator, NavRight, NavMypage, NavLogin, Logo } from "./style";
import { Link, useNavigate } from "react-router-dom";
const Header = (props) => {

    const navigate = useNavigate();

    const goToMyPage = () => {
        navigate('/mypage');
    }

    const goToLogin = () => {
        navigate('/login');
    }

    return (
        <HeaderWrapper>
            <Navigator>
                <Link to="/">
                    <Logo src="logo.png" />
                </Link>
                <NavRight>
                    {true && (
                        <NavMypage onClick={goToMyPage}>마이페이지</NavMypage>
                    )}
                    <NavLogin onClick={goToLogin}>로그인/회원가입</NavLogin>
                </NavRight>
            </Navigator>
        </HeaderWrapper>);
}

export default Header;