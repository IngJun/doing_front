import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Loginpage from "./pages/login/Loginpage";
import Mypage from "./pages/mypage/Mypage";
import Coverpage from "./pages/coverpage/Coverpage";
import Posting from "./pages/posting/Posting";
import Postpage from "./pages/postpage/Postpage";
import Header from "./components/header"
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/login" element={<Loginpage />} />
                <Route exact path="/mypage" element={<Mypage />} />
                <Route exact path="/coverpage" element={<Coverpage />} />
                <Route exact path="/posting" element={<Posting />} />
                <Route exact path="/postpage" element={<Postpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;