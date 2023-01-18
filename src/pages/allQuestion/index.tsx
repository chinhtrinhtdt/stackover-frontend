import * as React from "react";
import style from "./allQuestion.module.css"
import { DEFAULT_AVATAR_USERLIST } from "../../mocks";
import { useState, useEffect } from "react";
import { questionApi } from "../../api";
import { IQuestionDetail, ITagQuestionDetail } from "../../interfaces/question.interfaces";
import { useNavigate } from "react-router-dom";
import ModalAddQuestion from "../../components/QuestionComp/ModalAddQuestion";
import moment from 'moment-timezone';

function AllQuestion() {
    const navigate = useNavigate();
    const [listQuestion, setListQuestion] = useState<IQuestionDetail[]>([])
    const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
    
    useEffect(
        () => {
            questionApi
                .getApiQuestion()
                .then((res) => setListQuestion(res.data))
                .catch((err) => console.log(err))
        }, [isCreatePost]
    )

    const handleDetail = (id: number) => {
        navigate(`/questions/${id}`);
    }

    const getReloadData = () => {
        setIsCreatePost(!isCreatePost);
    };

    const renderListQuestion = () => {
        return (
            listQuestion.map((listQuestion: IQuestionDetail) => {
                return (
                    <>
                        <hr />
                        <div className="d-flex " key={listQuestion.id}>
                            <div className="flex-shrink-0 text-end ms-4">
                                <div>{listQuestion.votes.length} votes</div>
                                <div className={`${style.vote} my-2`}>{listQuestion.comments.length} comments</div>
                                <div className={`${style.vote}`}>{listQuestion.views} views</div>
                            </div>
                            <div className="flex-grow-1 ms-3 me-4">
                                <a href="" onClick={() => handleDetail(listQuestion.id)}>{listQuestion.title}</a>
                                <div>
                                    <div className="d-flex justify-content-between" >
                                        <div className="mt-2 d-flex">
                                            {
                                                listQuestion.tags.map((tag: ITagQuestionDetail) => {
                                                    return (
                                                        <>
                                                            <div key={tag.id}>
                                                                <a className={`${style.tag} me-2`} >
                                                                    {tag.name}
                                                                </a>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={`mt-4`}>
                                            <img src={DEFAULT_AVATAR_USERLIST[Math.floor(Math.random() * 5)]} className={`${style.image}`} alt="avatar" />
                                            <a href="" className="ms-2">{listQuestion.user.username} </a> <b>58</b> <small>asked 6 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }

    const renderCard = () => {
        return (
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between m-4">
                        <div className={`fs-3`}>
                            Top Questions
                        </div>
                        <div>
                            <button
                                type="button"
                                className={`${style.ask} mt-2 btn btn-primary`}
                                data-bs-toggle="modal"
                                data-bs-target="#addQuestion"
                            >
                                Add question
                            </button>
                            <ModalAddQuestion getReloadData={getReloadData} />
                        </div>

                    </div>
                    <div>
                        {renderListQuestion()}
                    </div>
                </div>
                <div className={`${style.card}`}>
                    {renderCard()}
                </div>
            </div>
        </>
    )
}

export default React.memo(AllQuestion)