import React from 'react';
import { useState } from 'react';
import { Typography, Container, Grid, Stack, Box, Button, CardMedia, CardContent, CardActionArea, Card, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
const nowDate = new Date().toISOString().slice(0, 10);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Category = (props) => {


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
                                <Pagination count={10} color="primary" />
                            </Stack>
                        </Container>
                    </Box>

                    <Container sx={{ py: 8 }} maxWidth="lg">

                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={4} md={3}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    // 16:9
                                                    // pt: '56.25%',
                                                    pt: '75',

                                                }}
                                                image="https://source.unsplash.com/random"
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    유저 아이디
                                                </Typography>
                                                <Typography gutterBottom variant="body2" sx={{
                                                    width: '100%',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    wordBreak: 'break-word',

                                                    display: '-webkit-box',


                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical'
                                                    // whiteSpace: 'novwrap'
                                                }} >
                                                    두잉의 목록리스트입니다.
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


