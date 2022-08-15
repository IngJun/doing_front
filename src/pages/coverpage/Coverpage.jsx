import React from 'react';
import styled from 'styled-components';
import Form from '../../components/form/Form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../../redux/modules/posts';
import Button from '../../components/button/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CoverPage = (props) => {
    const data = useSelector(state => state.posts.post_list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <Form btn_text={<AddIcon />} btn_action={() => navigate('/posting')} />

            {data.map((post) => {
                return (
                    <PostWrapper key={post.id} >
                        <StyledH1 onClick={() => {
                            navigate('/post/' + post.id);
                        }}>{post.title}</StyledH1>
                        <Button text={<DeleteIcon />} action={() => {dispatch(deletePost(post.id))}}/>
                    </PostWrapper>
                );
            })}
        </div>
    );
}

export default CoverPage;

const PostWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 1px 0;
    border: 1px solid #eee;
    border-radius: 10px;
`;

const StyledH1 = styled.h1`
    cursor: pointer;
`;