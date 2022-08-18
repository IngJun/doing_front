import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  /* border-bottom: 1px solid grey; */
  justify-content: center;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  
`;

export const Navigator = styled.div`
  width: 85%;
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

export const NavCoverpage = styled.span`
  cursor: pointer;
`;

export const NavMypage = styled.span`
  cursor: pointer;
`;


export const NavLogin = styled(NavMypage)``;