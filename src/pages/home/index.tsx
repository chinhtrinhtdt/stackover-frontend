import Header from "../../components/header";
import Navbar from "../../components/navbar";
import QuestionUI from "../QuestionUI/index";
import UserList from "../userlistUI/index";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="container d-flex align-items-start">
        <Navbar />
        <div className={`${styles.content} px-3 w-100`}>
          <UserList />
          {/* <QuestionUI /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
