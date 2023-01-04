import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../App";
import Login from "../pages/login";
import QuestionUI from "../pages/QuestionUI/index";
import Register from "../pages/register";
import UserlistUI from "../pages/userlistUI/index";
const RouterDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlist" element={<Home />} />
        <Route path="/question" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDom;
