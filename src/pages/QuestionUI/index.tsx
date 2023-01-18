import moment from "moment";
import { memo, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import { questionApi } from "../../api";
import MainContent from "../../components/Question/MainContent";
import Vote from "../../components/Question/Vote";
import ModalAddQuestion from "../../components/QuestionComp/ModalAddQuestion";
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE,
  LocalStorageKey,
} from "../../constants/general.constant";
import { sortListDecrease } from "../../helper/utils";
import {
  IQuestionDetail,
  ITagQuestionDetail,
} from "../../interfaces/question.interfaces";
import { DATADETAIL_GET_QUESTION } from "../../mocks";
import styles from "./questionUI.module.css";
import 'moment-timezone';

function QuestionPage() {
  const navigate = useNavigate();
  const { questionId } = useParams<string>();
  const [data, setData] = useState<IQuestionDetail[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<IQuestionDetail[]>(
    []
  );
  const [postDetail, setPostDetail] = useState<IQuestionDetail>(
    DATADETAIL_GET_QUESTION
  );
  const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_CURRENT_PAGE);

  useEffect(() => {
    if (questionApi) {
      const post = data.find(post => post.id === Number(questionId));
      post && setPostDetail(post);
    }
  }, [data, questionId]);

  useEffect(() => {
    getApiQuestion();
  }, [isCreatePost]);

  useEffect(() => {
    processPagination();
  }, [data, currentPage]);

  const processPagination = () => {
    const pageCount = Math.ceil(data.length / pageSize);
    const indexOfFirst = (currentPage * pageSize) % data.length;
    const indexOfLast = indexOfFirst + pageSize;
    setPageCount(pageCount);
    setCurrentQuestions(data.slice(indexOfFirst, indexOfLast));
  };

  const getApiQuestion = () => {
    questionApi
      .getApiQuestion()
      .then((res) => {
        const listDataSort = sortListDecrease(res.data);
        setData(listDataSort);
        setPostDetail(listDataSort[0]);
      })
      .catch((e) => console.log(e));
  };

  const getReloadData = () => {
    setIsCreatePost(!isCreatePost);
  };

  const handleClick = (postId: number) => {
    navigate(`/questions/${postId}`);
  };

  const handleClickPagination = (event: any) => {
    setCurrentPage(event.selected);
  };

  const renderListQuestion = () => {
    return currentQuestions.map((question: IQuestionDetail) => (
      <div
        className={`${styles.cursorPointer} d-flex mb-4 shadow p-2`}
        key={question.id}
        onClick={() => {
          handleClick(question.id);
        }}
      >
        <div className="d-flex flex-column ">
          <h6 className={styles.title}>{question.title}</h6>
          <div dangerouslySetInnerHTML={{__html: question.textContent}}  className={styles.textContent}></div >
          <div className={styles.row1}>
            {question?.tags.map((tag: ITagQuestionDetail, index: number) => <span key={index} className={`${styles.font12} ${styles.tags} me-2`}>{tag.name}{ } </span>)}
          </div>
          <span className={styles.font12}>
            {moment(question?.createdAt).format("LLL")}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <header>
        <div className="d-flex justify-content-between p-3">
          <h4 className="w-100">{postDetail?.title}</h4>
          <button
            type="button"
            className={`${styles.ask} btn btn-primary`}
            data-bs-toggle="modal"
            data-bs-target="#addQuestion"
          >
            Add question
          </button>
          <ModalAddQuestion getReloadData={getReloadData} />
        </div>

        <div className="d-flex flex-row mb-3">
          <div className="flex p-2">
            <small className="text-muted p-2">Time </small>
            {moment(postDetail?.createdAt).format("LLL")}
          </div>
          <div className="flex p-2">
            <small className="text-muted p-2">Tag </small>
            {postDetail?.tags.map((tag: ITagQuestionDetail, index: number) => (<span key={index} className="me-2">{tag.name}</span>))}
          </div>
        </div>
      </header>
      <hr />

      <div className="d-flex gap-3">
        <div className="d-flex w-75">
          <div className="p-2">
            <Vote questionId={postDetail?.id} />
          </div>
          <div className="p-2">
            <MainContent postDetail={postDetail} />
          </div>
        </div>

        <div className={`${styles.zIndex0} p-2 w-25`}>
          {renderListQuestion()}

          <ReactPaginate
            onPageChange={handleClickPagination}
            pageCount={pageCount}
            containerClassName="pagination justify-content-center"
            pageLinkClassName="page-link"
            activeClassName="active"
            previousLabel="<"
            previousLinkClassName="page-link"
            breakLabel="..."
            breakLinkClassName="page-link"
            nextLabel=">"
            nextLinkClassName="page-link"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(QuestionPage);
