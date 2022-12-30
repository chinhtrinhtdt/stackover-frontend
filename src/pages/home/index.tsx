<<<<<<< HEAD
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import QuestionUI from "../QuestionUI"
import "./commonLayout.css"
=======

import Header from "../../components/header"
import Navbar from "../../components/navbar"
import QuestionUI from "../QuestionUI/Index"
import styles from './home.module.css'

>>>>>>> master
function Home() {
  return (
    <div>
      <Header />
      <div className="container d-flex align-items-start">
        <Navbar />
        <div className={`${styles.content} px-3 w-100`}>
          <QuestionUI />
        </div>
      </div>
    </div>
  )
}

export default Home