import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: center;
`;

export const Navigator = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
width:80px;
object-fit: cover;
`;

export const NavRight = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const NavMypage = styled.span`
  cursor: pointer;
`;

export const NavLogin = styled(NavMypage)``;