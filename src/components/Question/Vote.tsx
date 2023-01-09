import * as React from "react";
import { questionApi } from "../../api";
import style from "./Question.module.css";
import { useState, useEffect } from "react";
import { IVote, IQuestionId, IVoteDetail } from "../../interfaces/question.interface";
import { DEFAULT_GET_VOTE_TYPE, GET_VOTE_DETAIL_TYPE } from "../../mocks";
import { param } from "jquery";


function Vote(props: IQuestionId) {
  const [check, setCheck] = useState<string>("");
  const [voteNumber, setVoteNumber] = useState<IVote>(DEFAULT_GET_VOTE_TYPE);
  const [voteType, setVoteType] = useState<string>("");
  const { questionId } = props;
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [statusVote, setStatusVote] = useState<IVoteDetail[]>([]);
  const [statusVoteDetail, setStatusVoteDetail] = useState<IVoteDetail>();

  const voteNoteLocal = JSON.parse(localStorage.getItem("userStatus") || "[]");
  // tim dung user dang dang nhap
  const voteUser = voteNoteLocal.find(
    (item: any) => item.username === user.username
  );

  const checkUserVoted = statusVote.find(
    ({ username }) => username === user.username
  );

  useEffect(() => {
    if (voteUser) {
      setVoteType(voteUser.status);
    }
    questionApi.getApiVote().then((res) => setVoteNumber(res.data));
  }, [checkUserVoted?.username,voteType]);

  const handleUpVote = () => {

    let type = "";
    const idxUser = voteNoteLocal.findIndex(
      (item: any) => item.username === user.username
    );

    //check da co user nay duoi local chua
    if (voteUser) {
      if (voteUser.status === "UP_VOTE") {
        setVoteType("");
        type = "";
      }
      if (voteUser.status === "DOWN_VOTE" || voteUser.status === "") {
        setVoteType("UP_VOTE");
        type = "UP_VOTE";
      }
      const tmp = [...voteNoteLocal];
      tmp[idxUser].status = type;
      localStorage.setItem("userStatus", JSON.stringify(tmp));
    } else {
      setVoteType("UP_VOTE");
      type = "UP_VOTE";
      const obj = {
        username: user.username,
        status: type,
      };
      voteNoteLocal.push(obj);
      localStorage.setItem("userStatus", JSON.stringify(voteNoteLocal));
    }
    postApiUpVote();
  };

  const postApiUpVote = () => {
    const params = {
      questionId: String(questionId),
      voteType: "UP_VOTE",
    };

    questionApi.postApiVote(params);
  };

  const postApiDownVote = () => {
    const params = {
      questionId: String(questionId),
      voteType: "UP_VOTE",
    };

    questionApi.postApiVote(params);
  };

  const handleDownVote = () => {
    let type = "";
    const idxUser = voteNoteLocal.findIndex(
      (item: any) => item.username === user.username
    );
    //check da co user nay duoi local chua
    if (voteUser) {
      if (voteUser.status === "DOWN_VOTE") {
        setVoteType("");
        type = "";
      }
      if (voteUser.status === "UP_VOTE" || voteUser.status === "") {
        setVoteType("DOWN_VOTE");
        type = "DOWN_VOTE";
      }
      const tmp = [...voteNoteLocal];
      tmp[idxUser].status = type;
      localStorage.setItem("userStatus", JSON.stringify(tmp));
    } else {
      setVoteType("DOWN_VOTE");
      type = "DOWN_VOTE";
      const obj = {
        username: user.username,
        status: type,
      };
      voteNoteLocal.push(obj);
      localStorage.setItem("userStatus", JSON.stringify(voteNoteLocal));
    }
    postApiDownVote();
  };

  return (
    <>
      <div>
        <i
          className={`${style.linkImprove} ${
            voteType === "UP_VOTE" ? style.activeBtnVote : null
          } bi bi-caret-up-fill fs-2 `}
          onClick={handleUpVote}
        ></i>
        <div className={`${style.iconText}`}>{voteNumber.count}</div>
        <i
          className={`${style.linkImprove} ${
            voteType === "DOWN_VOTE" ? style.activeBtnVote : null
          } bi bi-caret-down-fill fs-2`}
          onClick={handleDownVote}
        ></i>
        <br />
        <div className={`${style.iconText}`}>
          <i className={`${style.linkImprove} bi bi-bookmark fs-5`}></i>
        </div>
        <div className={`${style.iconText}`}>
          <i className={`${style.linkImprove} bi bi-clock-history fs-5`}></i>
        </div>
      </div>
    </>
  );
}
export default React.memo(Vote);
