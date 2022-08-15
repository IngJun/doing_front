import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Form from '../../components/form/Form';
import { createPost } from '../../redux/modules/posts';
import Button from '../../components/button/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const Posting = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);

    const makeNewPost = () => {
        if (title_ref.current.value.length === 0 ||
            content_ref.current.value.length <= 10) {
            window.alert('The content is too short or title is missing');
            return;
        }
        dispatch(createPost({title: title_ref.current.value, content: content_ref.current.value}))
        title_ref.current.value = '';
        content_ref.current.value = '';
        navigate('/');
    }

    return (
        <div>
            <Form btn_text={<ArrowBackIcon />} btn_action={() => { navigate(-1); }} />
            <PostWrapper>
                <div>
                    <StyledLabel htmlFor='title-input'>제목</StyledLabel><br />
                    <StyledInput type="text" ref={title_ref} id='title-input' />
                </div>
                <div>
                    <StyledLabel htmlFor='content-input'>내용</StyledLabel><br />
                    <StyledTextArea ref={content_ref} id='content-input' />
                </div>
                <ButtonGroup>
                    <Button text={<CheckIcon />} action={makeNewPost} />
                    <Button text={<CloseIcon />} action={() => { navigate('/') }} />
                </ButtonGroup>
            </PostWrapper>
        </div>
    );
}

export default Posting;

const PostWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

const StyledLabel = styled.label`
    font-size: 20px;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 30px;
    margin: 0px;
    border: 1 solid #eee;
    border-radius: 10px;
    font-size: 20px;
`;

const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    padding: 30px;
    margin: 0px;
    border: 1 solid #eee;
    border-radius: 10px;
    font-size: 20px;
    resize: vertical;
`;

const ButtonGroup = styled.div`
    text-align: right;
`;

