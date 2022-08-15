import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControlLabel, TextField, Checkbox, Button, Typography, Avatar, Box, Container } from "@mui/material";
import { useState } from "react";
import { Lock } from "@mui/icons-material";
const Login = ({ clickbtn }) => {


    const [userInfo, setUserInfo] = useState({
        id: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }


    const postLogin = () => {
        if (userInfo.id === "" || userInfo.password === "") {
            alert("아이디와 비밀번호를 입력해주세요.");
        } else {
            alert(`ID : ${userInfo.id} PW : ${userInfo.password}`);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <Lock />
                </Avatar>
                <Typography component='h1' variant='h5' align="center" sx={{ mb: 2 }}>로그인</Typography>

                <TextField label="ID" name="id" autoComplete="ID" required fullWidth autoFocus sx={{ mb: 2 }} onChange={onChangeHandler} />
                <TextField label="Password" type="password" name="password" autoComplete="current-password" sx={{ mb: 2 }} required fullWidth autoFocus onChange={onChangeHandler} />

                {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember Me" /> */}
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mb: 2 }} onClick={postLogin}>로그인</Button>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={clickbtn}>회원가입</Button>
            </Box>
        </Container>
    );

}

export default Login;