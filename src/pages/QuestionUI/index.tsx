import * as React from "react";
import { useEffect, useState } from "react";
import { questionApi } from "../../api";
import MainContent from "../../components/Question/MainContent";
import Vote from "../../components/Question/Vote";
import ModalAddQuestion from "../../components/QuestionComp/ModalAddQuestion";
import { IQuestionDetail } from "../../interfaces/api.interfaces";
import styles from "./questionUI.module.css";
import moment from "moment";
import { sortListDecrease } from "../../helper/utils";
import { DATADETAIL_GET_QUESTION } from "../../mocks";

function QuestionPage() {
  const [data, setData] = useState<IQuestionDetail[]>([]);
  const [questions, setQuestions] = useState<IQuestionDetail[]>([]);
  const [postDetail, setPostDetail] = useState<IQuestionDetail>(DATADETAIL_GET_QUESTION);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [questionPerPage, setQuestionPerPage] = useState<number>(5);

  useEffect(() => {
    questionApi.getApiQuestion()
      .then((res) => {
        const listDataSort = sortListDecrease(res.data);
        localStorage.setItem("post-questions", JSON.stringify(listDataSort));
        setData(listDataSort);
        setPostDetail(listDataSort[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setQuestions(sortListDecrease(data).slice(currentPage, questionPerPage));
    localStorage.setItem("post-questions", JSON.stringify(data));
  }, [data])

  const renderHeaderContent = (data: IQuestionDetail[]) => (
    <header>
      <div className="d-flex justify-content-between p-3">
        <h4>{postDetail?.title}</h4>
        <button
          type="button"
          className={`${styles.ask} btn btn-primary`}
          data-bs-toggle="modal"
          data-bs-target="#addQuestion"
        >
          Add question
        </button>
        <ModalAddQuestion setData={setData} />
      </div>
      
      <div className="d-flex flex-row mb-3">
        <div className="flex p-2">
          <small className="text-muted p-2">Time </small>
          {moment(postDetail?.createdAt).format("LLL")}
        </div>
        <div className="flex p-2">
          <small className="text-muted p-2">Tag </small>
          {postDetail.tag?.name}
        </div>
      </div>
    </header>
  );

  const renderListQuestion = (data: IQuestionDetail[]) => {
    return data.map((question: IQuestionDetail) => (
      <div className={`${styles.cursorPointer} d-flex mb-4 shadow p-2`} key={question.id} onClick={() => handleClick(question.id)}>
        <div className="d-flex flex-column ">
          <h6 className={styles.title}>{question.title}</h6>
          <p className={styles.textContent}>{question.textContent}</p>
          <div className="">
            <span className={`${styles.font12} ${styles.tags}`}>{question.tag?.name}</span>
          </div>
          <span className={styles.font12}>{moment(question?.createdAt).format("LLL")}</span>
        </div>
      </div>
    ));
  };

  const handlePreviousPage = () => {
    const listQuestion = data.slice((currentPage - 1) * questionPerPage, currentPage * questionPerPage);
    setCurrentPage(currentPage - 1);
    setQuestions(listQuestion);
  };

  const handleNextPage = () => {
    const listQuestion = data.slice((currentPage + 1) * questionPerPage, (currentPage + 2) * questionPerPage);
    setCurrentPage(currentPage + 1);
    setQuestions(listQuestion);
  };

  const handleSumPerPage = () => {
    return Math.ceil(data.length / questionPerPage);
  };

  const handleClick = (postId: number) => {
    const post = data.find(post => post.id === postId) || DATADETAIL_GET_QUESTION;
    setPostDetail(post);
  }
  
  return (
    <div className="container">
      {renderHeaderContent(data)}
      <hr />
      <div className="d-flex gap-3">
        <div className="d-flex w-75">
          <div className="p-2">
            <Vote />
          </div>
          <div className="p-2">
            <MainContent postDetail={postDetail} />
          </div>
        </div>
        <div className="p-2 w-25">
          {renderListQuestion(questions)}
          <nav aria-label="Page navigation ">
            <ul className="pagination justify-content-center shadow">
              <li className={`${currentPage === 0 && 'disabled'} page-item`}>
                <button className="page-link" onClick={handlePreviousPage} >Previous</button>
              </li>
              <li className="page-item">
                <span className="page-link" >{currentPage + 1}</span>
              </li>
              {currentPage + 1 < handleSumPerPage() &&
                <>
                  <li className="page-item">
                    <span className="page-link" >...</span>
                  </li>
                  <li className="page-item">
                    <span className="page-link" >{handleSumPerPage()}</span>
                  </li>
                </>
              }
              <li className={`${currentPage + 1 === handleSumPerPage() && 'disabled'} page-item`}>
                <button className="page-link" onClick={handleNextPage}>Next</button>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default React.memo(QuestionPage);
