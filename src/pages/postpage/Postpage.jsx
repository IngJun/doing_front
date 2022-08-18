import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../components/form/Form';
import { loadPosts, updatePost } from '../../redux/modules/posts';
import Doing from '../../components/doing/Doing';
import Button from '../../components/button/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const PostPage = () => {

    const params = useParams();
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const title_ref = useRef(null);
    const content_ref = useRef(null);

    const [postedit, setPostEdit] = useState(false);

    const posts = useSelector(state => state.post_list);
    const current_post = posts?.find(post => post.id === params.id);

    useEffect(() =>{
        dispatch(loadPosts());
    }, [dispatch]);

    const editPost = () => {
        if(!/\S/.test(title_ref.current.value) || !/\S/.test(content_ref.current.value)) {
            window.alert('Title or Content is empty!');
            return;
        }
        dispatch(updatePost(params.id, { title: title_ref.current.value, content: content_ref.current.value }));
        setPostEdit(!postedit);
    }

    return (
        <div>
            <Form btn_text={<ArrowBackIcon />} btn_action={() => { navigate(-1); }} />

            {!postedit
                ?
                <>
                    <PostWrapper>
                        <ButtonGroup>
                            <Button text={<EditIcon />} action={() => { setPostEdit(!postedit) }} />
                        </ButtonGroup>
                        <h1>{current_post.title}</h1>
                        <StyledPre>{current_post.content}</StyledPre>
                    </PostWrapper>
                </>
                :
                <>
                    <PostWrapper>
                        <ButtonGroup>
                            <Button text={<CloseIcon />} action={() => { setPostEdit(!postedit) }} />
                            <Button text={<CheckIcon />} action={editPost} />
                        </ButtonGroup>
                        <div>
                            <StyledLabel htmlFor='title-input'>제목</StyledLabel><br />
                        </div>
                        <StyledInput ref={title_ref} defaultValue={current_post.title} id='title-input' />
                        <div>
                            <StyledLabel htmlFor='content-input'>내용</StyledLabel><br />
                            <StyledTextArea ref={content_ref} defaultValue={current_post.content} id='content-input' />
                        </div>
                    </PostWrapper>
                </>
            }

            <Doing post_id={params.id} />

        </div >
    );
}

export default PostPage;

const PostWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

const StyledPre = styled.pre`
    font-size: 20px;
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
