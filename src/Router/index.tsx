import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import { checkToken } from "../helper/utils";

const RouterDom = () => {
  const { authed, setAuthed } = useContext(AuthContext);
  if(checkToken()) {
    setAuthed(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        {(!authed) &&
          <>
            <Route path="/login" element={<Login />} index />
            <Route path="/register" element={<Register />} />
            <Route path="/register" element={<Login />} />
          </>
        }

        {(authed) &&
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
