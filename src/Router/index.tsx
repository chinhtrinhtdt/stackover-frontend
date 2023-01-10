import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const RouterDom = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Home />} />
        <Route path="/questions" element={<Home />} />
        <Route path="/tags" element={<Home />} />
        <Route path="/companies" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDom;
