import React from "react";
import { FormControlLabel, TextField, Checkbox, Button, Typography, Avatar, Container, Box, Grid } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { useState } from "react";
const Signin = ({ clickbtn }) => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
        nickname: ""
    });

    const onChangeHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const checkID = () => {
        if (userInfo.id === "") { alert("아이디를 입력하세요!") }
        else {
            alert(`${userInfo.id}는 사용가능한 아이디입니다.`);
        }
    }

    const PostUserInfo = () => {
        if (userInfo.username === "" || userInfo.password === "" || userInfo.email === "" || userInfo.nickname === "") {
            alert("정보를 올바르게 입력해주세요!!");
        } else {
            alert("정보를 보냅니다.");
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <Lock />
                </Avatar>
                <Typography component='h1' variant='h5' align="center" sx={{ mb: 2 }}>회원가입</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <TextField label="ID" name="id" autoComplete="ID" placeholder="영문자 또는 숫자 6~20자" required fullWidth autoFocus sx={{ mb: 2 }} onChange={onChangeHandler} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ height: "80%" }} onClick={checkID}>확인</Button>
                    </Grid>
                </Grid>
                <TextField label="Password" type="password" name="password" autoComplete="current-password" placeholder="영문/숫자/특수문자 조합 8 ~ 16자" sx={{ mb: 2 }} required fullWidth autoFocus onChange={onChangeHandler} />
                <TextField label="E-Mail" type="email" name="email" sx={{ mb: 2 }} placeholder="이메일 형식" required fullWidth autoFocus onChange={onChangeHandler} />
                <TextField label="Nickname" type="text" name="nickname" placeholder="한글/영어/특수문자 조합 8~16자" sx={{ mb: 2 }} required fullWidth autoFocus onChange={onChangeHandler} />
                {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember Me" /> */}
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mb: 2 }} onClick={PostUserInfo}  >가입하기</Button>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={clickbtn}>취소</Button>
            </Box>
        </Container>
    );
}

export default Signin;