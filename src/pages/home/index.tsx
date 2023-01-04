import Header from "../../components/header";
import Navbar from "../../components/navbar";
import QuestionUI from "../QuestionUI/index";
import UserList from "../userlistUI/index";
import styles from "./home.module.css";
import { useLocation } from "react-router-dom";

function Home() {
  let pathName  = window.location.pathname
  const renderPage = () => {
    if (pathName  === "/questions") return <QuestionUI />;
    if (pathName  === "/users") return <UserList />;
  };
  return (
    <div>
      <Header />
      <div className="container d-flex align-items-start">
        <Navbar />
        <div className={`${styles.content} px-3 w-100`}>{renderPage()}</div>
      </div>
    </div>
  );
}

export default Home;
