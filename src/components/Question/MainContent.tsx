import * as React from "react";
import ModalComment from "../QuestionComp/ModalComment";
import style from "./question.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { questionApi } from "../../api";
import { IQuestion, IQuestionDetail } from "../../interfaces/api.interfaces";
import { DATADETAIL_GET_QUESTION } from "../../mocks";

function Maincontent() {
  const [posts, setPosts] = useState([]);
  const [isComment, setIsComment] = useState<boolean>(false);
  const [dataDetail, setdataDetail] = useState<IQuestionDetail>(
    DATADETAIL_GET_QUESTION
  );

  useEffect(() => {
    questionApi
      .getApiQuestion()
      // .then((res) => console.log(22,res.data[1].textContent))
      .then((res) => setdataDetail(res.data[0]))
      .catch((e) => console.log(e));
  }, [posts]);

  const renderAddComment = () => {
    return (
      <div>
        {isComment ? (
          <div>
            <div className="form-floating mt-4 mb-4">
              <textarea
                className={`form-control ${style.textComment}`}
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              ></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={() => setIsComment(false)}
            >
              Add a comment
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-4 ms-2"
              onClick={() => setIsComment(false)}
            >
              Hide
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={`btn btn-link ${style.linkImprove}`}
            onClick={() => setIsComment(true)}
          >
            Add a comment
          </button>
        )}
      </div>
    );
  };
  return (
    <div>
      <div>{dataDetail.textContent}</div>
      <br />
      <div className={`overflow-auto ${style.containerCode}`}>
        <p>{dataDetail.codeContent}</p>
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
                  {/* <div className="d-flex">
                    <div>
                      <i className="bi bi-dot "></i>
                    </div>
                    <div>4</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-dot"></i>
                    </div>
                    <div>3</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-circle-fill"></i>
                    </div>
                    <div>26</div>
                  </div>
                  <div></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`pl-4`}>
        <div>
          <hr />
          Very nice, simple, elegant. – <a href="#">Michel Floyd</a>
          <span className={style.linkImprove}> Aug 16, 2021 at 22:04</span>
        </div>
        <hr />
      </div>
      <div>{renderAddComment()}</div>
    </div>
  );
}

export default React.memo(Maincontent);
