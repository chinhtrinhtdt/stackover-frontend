import * as React from "react";
import { questionApi } from "../../api";
import style from "./Question.module.css";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import {
  IQuestionId,
  IVoteDetail,
} from "../../interfaces/question.interfaces";
import { DEFAULT_GET_VOTE_TYPE, GET_VOTE_DETAIL_TYPE } from "../../mocks";
import { param } from "jquery";
import { LocalStorageKey, VOTE_PAGE } from "../../constants/general.constant";

function Vote(props: IQuestionId) {
  const [voteNumber, setVoteNumber] = useState<number>(0);
  const [voteType, setVoteType] = useState<string>("");
  const { questionId } = props;
  const userName = JSON.parse(localStorage.getItem(LocalStorageKey.USER_NAME) || "{}");
  const userId = JSON.parse(localStorage.getItem(LocalStorageKey.USER_ID) || "{}");
  const [statusVote, setStatusVote] = useState<IVoteDetail[]>([]);
  const voteNoteLocal = JSON.parse(localStorage.getItem(LocalStorageKey.USER_STATUS) || "[]");
  const [checkStatus, setCheckStatus] = useState<boolean>(false);
const [checkVoteId, setCheckVoteId] = useState<number>(0);
  // tim dung user dang dang nhap
  const voteUser = voteNoteLocal.find(
    (item: IVoteDetail) => item.username === userName
  );

  // const voteCheckId = 
  const checkUserVoted = statusVote.find(
    ({ username }) => username === userName
  );
  const paramsRouter = useParams();
  useEffect(() => {
    setCheckVoteId(parseInt(localStorage.getItem(LocalStorageKey.USER_ID) || "{}"))
    if (paramsRouter.questionId) getVotepApi();
  }, [checkUserVoted?.username, voteType, checkStatus, voteNumber]);

   
  const getVotepApi = () => {
    questionApi
      .getApiVote(paramsRouter.questionId)
      .then((res) => setVoteNumber(res.data.upvote - res.data.downvote))
      .catch((err) => console.log(err));
    
    questionApi
      .getApiType(paramsRouter.questionId)
      .then((res) => setVoteType(res.data.statusVote))
      .catch((err) => console.log(err));
  };

  const handleUpVote = () => {
    console.log(paramsRouter.questionId);
    console.log(25,voteType);
    postApiUpVote();
  };

  const postApiUpVote = () => {
    const params = {
      questionId: String(paramsRouter.questionId).toString(),
      voteType: VOTE_PAGE.UP_VOTE,
    };

    questionApi
      .postApiVote(params)
      .then((res) => {
        setCheckStatus(!checkStatus);
      })
      .catch((err) => console.log(err));
  };

  const postApiDownVote = () => {
    const params = {
      questionId: String(paramsRouter.questionId).toString(),
      voteType: VOTE_PAGE.DOWN_VOTE,
    };
    questionApi
      .postApiVote(params)
      .then((res) => {
        setCheckStatus(!checkStatus);
      })
      .catch((err) => console.log(err));
  };

  const handleDownVote = () => {
    let type = "";
    const idxUser = voteNoteLocal.findIndex(
      (item: IVoteDetail) => item.username === userName
    );
    //check da co user nay duoi local chua
    if (voteUser) {
      if (voteUser.status === VOTE_PAGE.DOWN_VOTE) {
        setVoteType("");
        type = "";
      }
      if (voteUser.status === VOTE_PAGE.UP_VOTE || voteUser.status === "") {
        setVoteType(VOTE_PAGE.DOWN_VOTE);
        type = VOTE_PAGE.DOWN_VOTE;
      }
      const tmp = [...voteNoteLocal];
      tmp[idxUser].status = type;
      localStorage.setItem(LocalStorageKey.USER_STATUS, JSON.stringify(tmp));
    } else {
      setVoteType(VOTE_PAGE.DOWN_VOTE);
      type = VOTE_PAGE.DOWN_VOTE;
      const obj = {
        username: userName,
        status: type,
      };
      voteNoteLocal.push(obj);
      localStorage.setItem(
        LocalStorageKey.USER_STATUS,
        JSON.stringify(voteNoteLocal)
      );
    }
    postApiDownVote();
  };

  return (
    <>
      <div>
        <i
          className={`${style.vote} ${
            voteType === VOTE_PAGE.UP_VOTE ? style.activeBtnVote : null
          } bi bi-caret-up-fill fs-2 `}
          onClick={handleUpVote}
        ></i>
        <div className={`${style.iconText}`}>{voteNumber}</div>
        <i
          className={`${style.vote} ${
            voteType === VOTE_PAGE.DOWN_VOTE ? style.activeBtnVote : null
          } bi bi-caret-down-fill fs-2`}
          onClick={handleDownVote}
        ></i>
        <br />
        <div className={`${style.iconText}`}>
          <i className={`${style.vote} bi bi-bookmark fs-5`}></i>
        </div>
        <div className={`${style.iconText}`}>
          <i className={`${style.vote} bi bi-clock-history fs-5`}></i>
        </div>
      </div>
    </>
  );
}
export default React.memo(Vote);
