import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Button from '../button/Button';

const Header = ({btn_text, btn_style, btn_action}) => {
    const navigate = useNavigate();

    return ( 
        <Wrapper >
            <p></p>
            <Button text={btn_text} action={btn_action}/>
        </Wrapper>
     );
}
 
export default Header;

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0;
    width: 100%;
    background-color: #eee;
    border-radius: 10px;
`;

