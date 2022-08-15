import React from 'react';
import styled from 'styled-components';

const Button = ({text, action}) => {
    return ( 
        <StyledButton onClick={action}>
            {text}
        </StyledButton>
     );
}
 
export default Button;

const StyledButton = styled.button`
    border: none;
    margin: 1px;
    display: inline-flex;
    align-items: center;
    background-color:#ddd;
    border-radius: 3px;
`;
