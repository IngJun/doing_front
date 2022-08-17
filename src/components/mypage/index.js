import React from "react";
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import { useNavigate, } from "react-router-dom";

import { Container, Box, Avatar } from "@mui/material";

import UserProfile from "./userprofile";
import EditModal from "./EditModal";

const MyPageWrap = (props) => {

    const naviagte = useNavigate();

    return (
        <>
            <EditModal />
            <Container sx={{ padding: 10, display: 'flex', justifyContent: 'center' }}>
                <UserProfile />
            </Container>
            <FloatingBtn>
                <Tooltip title="작성하기" placement="top" onClick={() => naviagte('/posting')}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </FloatingBtn>
        </>
    );
}


const FloatingBtn = styled.div`
position:absolute;
left: 90%;
bottom: 10%;

`
export default MyPageWrap;


