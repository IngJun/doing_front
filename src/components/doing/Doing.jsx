// Comment section
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { readDoing, createDoingAxios, updateDoingAxios, deleteDoingAxios } from '../../redux/modules/posts';
import Button from '../button/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RateReviewIcon from '@mui/icons-material/RateReview';

const Doing = ({ post_id }) => {
    const dispatch = useDispatch();
    const doings = useSelector(state => state.doing_list);

    const doing_ref = useRef(null);
    const edit_ref = useRef(null);
    const [doingcreate, setCreate] = useState(false);
    const [doingdelete, setDelete] = useState(false);
    const [doingupdate, setUpdate] = useState(false);
    const [doing_id, setdoingId] = useState(null);


    return (
        <DoingSectionWrapper>
            {/* post doing */}
            <DoingWrapper>
                <StyledInput type='text' ref={doing_ref} placeholder='일정 추가하기' />
                <Button text={<RateReviewIcon />} action={() => {
                    if (!/\S/.test(doing_ref.current.value)) {
                        window.alert('내용이 없습니다.');
                        return;
                    }
                    setCreate(!doingcreate);
                    dispatch(createDoingAxios({ post_id: post_id, content: doing_ref.current.value }));
                    doing_ref.current.value = '';
                }} />
            </DoingWrapper>

            <hr />

            {/* display doings */}
            {doings?.map((doing) => {
                if(doing.post_id !== post_id) {
                    return null;
                }
                if (doing_id === doing.id && doingupdate) {
                    return (
                        <DoingWrapper key={doing.id}>

                            <StyledInput ref={edit_ref} type="text" defaultValue={doing.content} />
                            <ButtonGroup>
                                <Button text={<CloseIcon />} action={() => {
                                    setUpdate(!doingupdate);
                                }} />
                                <Button text={<CheckIcon />} action={() => {
                                    if (!/\S/.test(edit_ref.current.value)) {
                                        window.alert('Comment is empty!');
                                        return;
                                    }
                                    setUpdate(!doingupdate);
                                    console.log(edit_ref.current.value);
                                    dispatch(updateDoingAxios(doing.id, edit_ref.current.value));
                                    dispatch(readDoing(post_id));
                                }} />
                            </ButtonGroup>
                        </DoingWrapper>
                    )
                }
                else {
                    return (
                        <DoingWrapper key={doing.id}>
                            <p>
                                {doing.content}
                            </p>
                            <ButtonGroup>
                                <Button text={<EditIcon />} action={() => {
                                    setUpdate(!doingupdate);
                                    setdoingId(doing.id);
                                }} />
                                <Button text={<DeleteIcon />} action={() => {
                                    setDelete(!doingdelete);
                                    dispatch(deleteDoingAxios(doing.id));
                                    dispatch(readDoing(post_id));
                                }} />
                            </ButtonGroup>
                        </DoingWrapper>
                    )
                }
            })}
        </DoingSectionWrapper>
    );
}

export default Doing;

const DoingSectionWrapper = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 80%;
    padding: 5px;
    margin: 0px;
    border: 1 solid #eee;
    border-radius: 10px;
    font-size: 20px;
`;

const DoingWrapper = styled.div`
    height: 50px;
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & p {
        font-size: 16px;
        height: 20px;
        padding: 0;
    }
`;

const ButtonGroup = styled.div`
    text-align: right;
`;