import React from "react";
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import { useNavigate, } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";



import UserProfile from "./userprofile";
import EditModal from "./EditModal";



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



const MyPageWrap = (props) => {


    const navigate = useNavigate();

    return (
        <>
            <UserProfile />
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
                                        // image="https://source.unsplash.com/random"
                                        image={true ? "https://source.unsplash.com/random" : "img/default_img.jpeg"}
                                        alt="img/default_img.jpeg"
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

            <FloatingBtn>
                <Tooltip title="작성하기" placement="top" onClick={() => navigate('/posting')}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </FloatingBtn>
        </>
    );
}


const FloatingBtn = styled.div`
position:fixed;
left: 93%;
bottom: 10%;

`
export default MyPageWrap;


