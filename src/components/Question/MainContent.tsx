import moment from "moment";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { questionApi } from "../../api";
import { IPropsMainContent } from "../../interfaces/props.interfaces";
import { ICommentDetail } from "../../interfaces/question.interface";
import style from "./Question.module.css";

function Maincontent(props: IPropsMainContent) {
  const { postDetail } = props;
  const [isComment, setIsComment] = useState<boolean>(false);
  const [commentDataDetail, setCommentDataDetail] = useState<ICommentDetail[]>([]);
  const [contentComment, setContentComment] = useState<string>("");

  useEffect(() => {
    questionApi
      .getApiComment()
      .then((res) => setCommentDataDetail(res.data))
      .catch((e) => console.log(e));
  }, [isComment]);

  const handleSunmitCmt = () => {
    const params = {
      content: contentComment,
      questionId: postDetail.id.toString(),
    };
    document
      .querySelector(".form-add-question")
      ?.classList.add("was-validated");
    if (contentComment) {
      setContentComment("");
      questionApi.postApiComment(params).then((res) => {
        if (res.status === 201) {
          setIsComment(!isComment);
        }
      });
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
      <div className={`${style.textComment}pl-4`}>
        {commentDataDetail.map((item: ICommentDetail, index: number) => (
          <div key={index}>
            <hr />
            {item.content} - {" "}
            <a href="#" className={`${style.textComment}`}>
              {item.user.username}
            </a>
            {" "}-{" "}
            <span className={`${style.textComment} ${style.linkImprove}`}>
              {moment(item?.createdAt).format("LLL")}
            </span>
          </div>
        ))}
        <hr />
      </div>
      <div>{renderAddComment()}</div>
    </div>
  );
}

export default memo(Maincontent);
