import * as React from "react";
import { useEffect, useState } from "react";
import { questionApi } from "../../api";
import MainContent from "../../components/Question/MainContent";
import Vote from "../../components/Question/Vote";
import ModalAddQuestion from "../../components/QuestionComp/ModalAddQuestion";
import { IQuestionDetail } from "../../interfaces/api.interfaces";
import styles from "./questionUI.module.css";

const renderTime = (name: string, value: string) => {
  return (
    <div className="flex p-2">
      <small className="text-muted p-2">{name} </small>
      {value}
    </div>
  );
};

const renderHeaderContent = (data: IQuestionDetail[], setPosts:(item: any) => void) => (
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
      <ModalAddQuestion setPosts={setPosts} />
    </div>
    <div className="d-flex flex-row mb-3">
      {renderTime("Asked ", "today")}
      {renderTime("Modified ", "today")}
      {renderTime("Viewed  ", "22 times")}
    </div>
  </div>
);

const renderListQuestion = (data: IQuestionDetail[]) => {
  return data.reverse().slice(0,5).map((question: any) => (
    <div className="d-flex mb-4 shadow p-2" key={question.id}>
      <div className="d-flex flex-column ">
        <h6>
          {question.title.length > 50 ?
            `${question.title.substring(0, 50)}...` : question.title
          }
        </h6>
        <div className={`${styles.font12} p-1`}>
          {question.textContent.length > 100 ?
            `${question.textContent.substring(0, 100)}...` : question.textContent
          }
        </div>
        <div className="d-flex gap-3">
          <span className={`${styles.font12} ${styles.tags}`}>
            {question.tag.name}
          </span>
        </div>
        <div className="d-flex justify-content-between ">
          <span className={styles.font12}>{question.createdAt.slice(0, 10)}</span>
        </div>
      </div>
    </div>
  ));
};

function QuestionPage() {
  const [posts, setPosts] = useState<any>([]);
  const [data, setData] = useState<IQuestionDetail[]>([]);

  useEffect(() => {
    questionApi
      .getApiQuestion()
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [posts]);

  return (
    <div className="container">
      {renderHeaderContent(data, setPosts)}
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
