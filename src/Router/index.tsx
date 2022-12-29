import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../App'
import Question from "../pages/question"

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<Question />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom