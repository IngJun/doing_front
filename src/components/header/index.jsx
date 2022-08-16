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
import { getCookie, deleteCookie } from "../../auth/auth";

const Header = (props) => {
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
          {getCookie("accessToken") !== "" && (
            <NavMypage onClick={goToMyPage}>마이페이지</NavMypage>
          )}
          {getCookie("accessToken") !== "" ? (
            <NavLogin
              onClick={() => {
                deleteCookie("accessToken");
                deleteCookie("refreshToken");
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
