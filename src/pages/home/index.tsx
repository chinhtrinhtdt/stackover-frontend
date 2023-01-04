import Header from "../../components/header";
import Navbar from "../../components/navbar";
import QuestionUI from "../QuestionUI/index";
import Tags from "../tags";
import UserList from "../userlistUI/index";
import styles from "./home.module.css";

function Home() {
  let pathName  = window.location.pathname
  const renderPage = () => {
    if (pathName  === "/questions" || pathName === "/") return <QuestionUI />;
    if (pathName  === "/users") return <UserList />;
    if (pathName  === "/tags") return <Tags />;
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
