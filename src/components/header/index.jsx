import React from "react";
import {
  HeaderWrapper,
  Navigator,
  NavRight,
  NavMypage,
  NavLogin,
  Logo,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { cookies, getCookie, deleteCookie } from "../../auth/auth";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const Header = (props) => {
  const [isToken, setToken] = useState(false);

  useEffect(() => {
    setToken(getCookie("accessToken") === undefined ? false : true);
  });

  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate("/mypage");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  //   console.log(getCookie("accessToken"));

  return (
    <HeaderWrapper>
      <Navigator>
        <Link to="/">
          <Logo src="logo.png" />
        </Link>
        <NavRight>
          {isToken && <NavMypage onClick={goToMyPage}>마이페이지</NavMypage>}
          {isToken ? (
            <NavLogin
              onClick={() => {
                deleteCookie("accessToken");
                deleteCookie("refreshToken");
                alert("로그아웃 완료");
                window.location.reload();
              }}
            >
              로그아웃
            </NavLogin>
          ) : (
            <NavLogin onClick={goToLogin}>로그인/회원가입</NavLogin>
          )}
        </NavRight>
      </Navigator>
    </HeaderWrapper>
  );
};

export default Header;
