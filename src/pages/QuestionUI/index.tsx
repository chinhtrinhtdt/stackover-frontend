import * as React from "react";
import MainContent from "../../components/Question/MainContent";
import Vote from "../../components/Question/Vote";
import ModalAddQuestion from "../../components/QuestionComp/ModalAddQuestion";
import { LIST_QUESTIONS } from "../../mocks";
import styles from "./questionUI.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { questionApi } from "../../api";
import { IQuestionDetail } from "../../interfaces/api.interfaces";

const renderTime = (name: string, value: string) => {
  return (
    <div className="flex p-2">
      <small className="text-muted p-2">{name} </small>
      {value}
    </div>
  );
};

const renderHeaderContent = (data: IQuestionDetail[]) => (
  <div>
    <div className="d-flex justify-content-between p-3">
      <h4>{data[0]?.title}</h4>
      <button
        type="button"
        className={`${styles.ask} btn btn-primary`}
        data-bs-toggle="modal"
        data-bs-target="#addQuestion"
      >
        Add question
      </button>
      <ModalAddQuestion />
    </div>
    <div className="d-flex flex-row mb-3">
      {renderTime("Asked ", "today")}
      {renderTime("Modified ", "today")}
      {renderTime("Viewed  ", "22 times")}
    </div>
  </div>
);

const renderListQuestion = (data: IQuestionDetail[]) => {
  return data.map((question: any, index: number) => (
    <div className="d-flex mb-4 shadow-sm p-1" key={question.id}>
      <div className="d-flex flex-column ">
        <h6>{question.title}</h6>
        <div className={`${styles.font12} p-1`}>{question.textContent}</div>
        <div className="d-flex gap-3">
          <span className={`${styles.font12} ${styles.tags}`}>
            {question.tag.name}
          </span>
        </div>
        <div className="d-flex justify-content-between ">
          <span className={styles.font12}>
            {question.votesNumber} votes : 3
          </span>
          <span className={styles.font12}>
            {question.answersNumber} answer : 4
          </span>
          <span className={styles.font12}>{question.viewsNumber} views: 8</span>
        </div>
      </div>
    </div>
  ));
};

function QuestionPage() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState<IQuestionDetail[]>([]);

  useEffect(() => {
    questionApi
      .getApiQuestion()
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [posts]);

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
            <MainContent />
          </div>
        </div>
        <div className="p-2 w-25">{renderListQuestion(data)}</div>
      </div>
    </div>
  );
}

export default React.memo(QuestionPage);
