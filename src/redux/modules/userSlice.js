import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList: [],
};



const userSlice = createSlice({
    name: "user",
    initialState,
    //리듀셔 - 액션생성 함수까지 합쳐진것
    reducers: {
        //리뷰 생성 리듀서
        createUser: (state, action) => {
            state.userList.push(action.payload);
        }
    }
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;