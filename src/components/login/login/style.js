import styled from "styled-components";

export const MainWarp = styled.div`
display:flex;
flex-direction : column;
border: 2px solid black;
justify-content:center;
border-radius: 3px;
gap: 50px;
* {
    text-align:center;
}
`;

export const ButtonGroup = styled.div`
display:flex;
flex-direction: column;

button{
    margin:auto;
  width: 100px;
}
width: 50%;
gap: 30px;
`;