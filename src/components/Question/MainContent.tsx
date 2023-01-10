import * as React from "react";
import { useState } from "react";
import { IPropsMainContent } from "../../interfaces/props.interfaces";
import style from "./Question.module.css";
import { Link } from "react-router-dom";

function Maincontent(props: IPropsMainContent) {
  const { postDetail } = props;

  const [isComment, setIsComment] = useState<boolean>(false);

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
      <div>{postDetail?.textContent}</div>
      <br />
      <div className={`overflow-auto ${style.containerCode}`}>
        <p>{postDetail?.codeContent}</p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="p-2 w-32 ">
          <Link to="./#" className={`${style.linkImprove} mx-2`}>
            Improve this question
          </Link>
          <Link to="./#" className={`${style.linkImprove} mx-2`}>
            Follow
          </Link>
        </div>
        <div className={`d-flex flex-row-reverse card mb-3 card-roll ${style.card_box}`}        >
          <div className="row g-0 d-flex m-2 ">
            <div className="p-2 fs-6">
              <small>asked Feb 11, 2019 at 15:18</small>
            </div>
            <div className="col-md-2 m-2">
              <img src="https://i.stack.imgur.com/kKetn.jpg?s=64&g=1" className="img-fluid rounded-start" alt="avatar" />
            </div>
            <div className="col-md-8 m-2">
              <h5 className="card-title fs-6">devserkan</h5>
              <div className="d-flex">
                <span>16.3k</span>
                <ul className={`d-flex ${style.listVote}`}>
                  <li><span>1</span></li>
                  <li><span>222</span></li>
                  <li><span>222</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{renderAddComment()}</div>
    </div>
  );
}

export default React.memo(Maincontent);
