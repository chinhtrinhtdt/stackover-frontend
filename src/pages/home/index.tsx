import Header from '../../components/header'
import Navbar from '../../components/navbar'
import QuestionUI from "../QuestionUI"
import "./commonLayout.css"
function Home() {
  return (
    <div>
      <Header />
      <div className="container d-flex align-items-start">
        <Navbar />
        <div className="content px-3 w-100">
          <QuestionUI />
        </div>
      </div>
    </div>
  )
}

export default Home