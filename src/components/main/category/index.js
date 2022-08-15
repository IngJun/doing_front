import React from 'react';
import { MainWrap, Box } from "./style"
import { useState } from 'react';

const Category = (props) => {
    return (
        <MainWrap>
            <h3>전체</h3>
            <DropBox>
                <Box>
                    <ul>
                        <li>운동/스포츠</li>
                        <li>여행/아웃도어</li>
                        <li>문학/공연/축제</li>
                        <li>음악/악기</li>
                        <li>인문학/책/글</li>
                        <li>게임/오락</li>
                        <li>외국/언어</li>
                        <li>공연/만들기</li>
                        <li>요리/제조</li>
                        <li>자유주제</li>
                    </ul>
                </Box>
            </DropBox>
        </MainWrap>
    );
}

const DropBox = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setOpen(!open)}>카테고리</button>
            {open && props.children}
        </div>
    )
}


export default Category;

