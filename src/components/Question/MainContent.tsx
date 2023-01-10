import * as React from "react";
import ModalComment from "../QuestionComp/ModalComment";
import style from "./Question.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { questionApi } from "../../api";
import {
  IQuestion,
  IQuestionDetail,
  ICommentDetail,
  IComment,
} from "../../interfaces/api.interfaces";
import { DATADETAIL_GET_QUESTION } from "../../mocks";

function Maincontent() {
  const [posts, setPosts] = useState([]);
  const [isComment, setIsComment] = useState<boolean>(false);
  const [quesdataDetail, setQuesdataDetail] = useState<IQuestionDetail>(
    DATADETAIL_GET_QUESTION
  );
  const [commentDataDetail, setCommentDataDetail] = useState<ICommentDetail[]>(
    []
  );
  const [contentComment, setContentComment] = useState<string>("");
  const [postId, setPostId] = useState<string>("3");

  useEffect(() => {
    questionApi
      .getApiQuestion()
      .then((res) => setQuesdataDetail(res.data[14]))
      .catch((e) => console.log(e));
    questionApi
      .getApiComment()
      .then((res) => setCommentDataDetail(res.data))
      .catch((e) => console.log(e));
  }, [isComment]);

  const handleSunmitCmt = () => {
    const params = {
      content: contentComment,
      postId: postId,
    };
    document
      .querySelector(".form-add-question")
      ?.classList.add("was-validated");
    if (contentComment) {
      setContentComment("");
      setIsComment(!isComment);
      questionApi.postApiComment(params);
    }
  };

  const renderAddComment = () => {
    return (
      <div>
        {isComment ? (
          <div>
            <div className="form-floating mt-4 mb-4">
              <form className="form-add-question">
                <div className="mb-3">
                  <label htmlFor="codeContent" className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    id="codeContent"
                    name="codeContent"
                    value={contentComment}
                    onChange={(e) => setContentComment(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">Please fill a comment.</div>
                </div>
              </form>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={handleSunmitCmt}
            >
              Add a comment
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-4 ms-2"
              onClick={() => setIsComment(!isComment)}
            >
              Hide
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={`btn btn-link ${style.linkImprove}`}
            onClick={() => setIsComment(!isComment)}
          >
            Add a comment
          </button>
        )}
      </div>
    );
  };
  return (
    <div>
      <div>{quesdataDetail?.textContent}</div>
      <br />
      <div className={`overflow-auto ${style.containerCode}`}>
        <p>{quesdataDetail?.codeContent}</p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="p-2 w-32 ">
          <a href="" className={`${style.linkImprove}`}>
            Share{" "}
          </a>
          <a href="" className={`${style.linkImprove} mx-2`}>
            Improve this question{" "}
          </a>
          <a href="" className={style.linkImprove}>
            Follow{" "}
          </a>
        </div>
        <div
          className={`d-flex flex-row-reverse card mb-3 card-roll ${style.card_box}`}
        >
          <div className="row g-0 d-flex m-2 ">
            <div className="p-2 fs-6">
              <small>asked Feb 11, 2019 at 15:18</small>
            </div>
            <div className="col-md-2 m-2">
              <img
                src="https://i.stack.imgur.com/kKetn.jpg?s=64&g=1"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 ">
              <div className="m-2">
                <h5 className="card-title fs-6">devserkan</h5>
                <div className="d-flex">
                  <div>16.3k</div>
                  <div className={`d-flex ${style.listVoteCotainer}`}>
                    <ul className={`d-flex ${style.listVote}`}>
                      <li>
                        <span>1</span>
                      </li>
                      <li>
                        <span>222</span>
                      </li>
                      <li>
                        <span>222</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${style.textComment}pl-4`}>
        {commentDataDetail.map((item: ICommentDetail, index: number) => (
          <div key={index}>
            <hr />
            {item.content} -{" "}
            <a href="#" className={`${style.textComment}`}>
              {item.user.username}
            </a>
            -
            <span className={`${style.textComment} ${style.linkImprove}`}>
              {item.createdAt}
            </span>
          </div>
        ))}
        <hr />
      </div> */}
      {/* <div>{renderAddComment()}</div> */}
    </div>
  );
}

export default React.memo(Maincontent);
