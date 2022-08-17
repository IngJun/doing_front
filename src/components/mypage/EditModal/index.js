import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { TextField, Card, CardMedia, IconButton, Container } from '@mui/material';
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
};

export default function EditModal() {
    //미리보기
    const [fileImage, setFileImage] = useState("img/default_img.jpeg");

    //사진 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        console.log(fileImage);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [userInfo, setUserInfo] = useState({
        nickname: "",
        introduce: "",
    });

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        프로필 수정
                    </Typography>
                    <div style={{ position: "relative" }}>
                        <Card sx={{ width: "100%", height: "200px" }}>
                            <CardMedia
                                component="img"
                                height="200px"
                                image={fileImage}
                                alt={fileImage}
                            />
                        </Card>
                        <IconButton sx={{ position: "absolute", bottom: "2%", right: "2%" }} color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={saveFileImage} />
                            <PhotoCamera />
                        </IconButton>
                    </div>
                    <TextField id="outlined-basic" label="닉네임" variant="outlined" />

                    <TextField
                        id="filled-multiline-static"
                        label="소개글"
                        multiline
                        rows={3}
                        onChange={handleChange}
                        variant="filled"
                    />
                    <Button variant="contained" component="label">
                        업데이트
                    </Button>


                </Box>
            </Modal>
        </div>
    );
}
