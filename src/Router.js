import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Coverpage from "./pages/coverpage/Coverpage";
import Mypage from "./pages/mypage/Mypage";
import Posting from "./pages/posting/Posting";
import Postpage from "./pages/postpage/Postpage";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/mypage" element={<Mypage />} />
                <Route exact path="/coverpage" element={<Coverpage />} />
                <Route exact path="/posting" element={<Posting />} />
                <Route exact path="/postpage" element={<Postpage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;