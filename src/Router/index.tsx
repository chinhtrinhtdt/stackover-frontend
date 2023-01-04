import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../App'
import Login from "../pages/login"
import Register from "../pages/register"

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom