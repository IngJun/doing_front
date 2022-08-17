import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Container, Grid, Stack, Box, Paper, CardMedia, CardContent, CardActionArea, Card, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from "../../../auth/auth"

const theme = createTheme();
const nowDate = new Date().toISOString().slice(0, 10);

//더미 데이터
const cards = [{
    id: 0, //게시글 id
    boarderTitle: "게시판 제목ㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅂㅈㄷㄱㅃㄷㅂㄷㄱㅂㄷㅈㄱㅂㄷㄱㅂㄷㄱ멍리멍란머ㅣㄹ아ㅓ미ㅏㅇ러ㅣ마ㅓㅇ리마ㅓㄴ이ㅏ러미낭", //게시판 이름
    authorName: "테스트 닉네임", //작성자 닉네임
    countBoradVisit: 123, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 1, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "영등포꿀쟁이", //작성자 닉네임
    countBoradVisit: 45, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 2, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "두루미", //작성자 닉네임
    countBoradVisit: 9999, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 3, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "거북이", //작성자 닉네임
    countBoradVisit: 234234, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 4, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "런닝맨", //작성자 닉네임
    countBoradVisit: 55, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 5, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "박명수", //작성자 닉네임
    countBoradVisit: 65, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 6, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "유재석", //작성자 닉네임
    countBoradVisit: 234, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 7, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "귀멸의 칼날", //작성자 닉네임
    countBoradVisit: 12, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 8, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "동해물과", //작성자 닉네임
    countBoradVisit: 23, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
}, {
    id: 9, //게시글 id
    boarderTitle: "게시판 제목", //게시판 이름
    authorName: "리엑트 망해라", //작성자 닉네임
    countBoradVisit: 4409, //방문자 수
    createdAt: "2022-08-17 23:00:56" //게시일
},];

// const board = {
//     id: 0, //게시글 id
//     boarderTitle: "게시판 제목", //게시판 이름
//     authorName: "nick1", //작성자 닉네임
//     countBoradVisit: 0, //방문자 수
//     createdAt: "2022-08-17 23:00:56" //게시일
// }


const Category = (props) => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    //게시물 목록
    const [boardList, setBoard] = useState([]);
    const [pageNation, setPageNation] = useState({
        idx: 0,
        totalIdx: 0,
    });

    const accessToken = getCookie("accessToken");

    useEffect(() => {
        getBoardList(page);
    }, [page])


    const getBoardList = (idx = 0) => {
        axios.get(`http://13.125.122.191:8080/boards?page=${(parseInt(page) - 1)}`)
            .then(function (response) {
                console.log(response);
                setBoard(response.data.content);
                setPageNation({ ...pageNation, idx: response.data.number, totalIdx: response.data.totalPages })
            }).catch(function (error) {
                console.log(error)
            }).then(function () { });
    }


    const navigate = useNavigate();
    return (
        <>
            <ThemeProvider theme={theme}>
                <main>
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                {nowDate}
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                오늘 당신의 하루는 어땠나요? <br />오늘의 두잉을 사람들과 공유해봅시다!
                            </Typography>

                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                {/* <Button variant="contained">Main call to action</Button>
                                <Button variant="outlined">Secondary action</Button> */}
                                <Pagination count={pageNation.totalIdx} color="primary" onChange={handleChange} />
                            </Stack>
                        </Container>
                    </Box>

                    <Container sx={{ py: 8 }} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card.id} xs={12} sm={4} md={3}>

                                    <Card elevation={12}
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardActionArea onClick={() => { navigate(`/boards/${card.id}`) }}>
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    // // 16:9
                                                    // // pt: '56.25%',
                                                    // pt: '75',
                                                    width: "400px",
                                                    height: "300px",
                                                    objectFit: 'center'
                                                }}
                                                image="https://source.unsplash.com/random"
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="body2" component="h5" style={{ color: "gray" }}>
                                                    {card.createdAt.slice(0, 10)}
                                                </Typography >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {card.authorName}
                                                    </Typography >
                                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <VisibilityIcon sx={{ width: '15px', color: '#464646' }} />
                                                        <div>{card.countBoradVisit}</div>
                                                    </div>

                                                </div>


                                                <Typography gutterBottom variant="body2" sx={{
                                                    display: "inline-block",
                                                    width: '100%',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }} >
                                                    {card.boarderTitle}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </>
    );
}


export default Category;


