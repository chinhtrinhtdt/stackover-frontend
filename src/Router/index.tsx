import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { AuthContext } from "../App";
import { checkToken } from "../helper/utils";

const RouterDom = () => {
  const { authed } = useContext(AuthContext);
  console.log("checkToken", checkToken())
  return (
    <BrowserRouter>
      <Routes>
        {(!checkToken()) &&
          <>
            <Route path="/login" element={<Login />} index />
            <Route path="/register" element={<Register />} />
          </>
        }

        {(authed || checkToken()) &&
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="/questions" element={<Home />} />
            <Route path="/tags" element={<Home />} />
            <Route path="/companies" element={<Home />} />
          </>
        }
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDom;
