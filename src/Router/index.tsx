import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../App'

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom