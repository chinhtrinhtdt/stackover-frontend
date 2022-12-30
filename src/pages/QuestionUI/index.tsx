import * as React from 'react';
import MainContent from '../../components/Question/MainContent';
import Vote from '../../components/Question/Vote';
import ModalAddQuestion from '../../components/QuestionComp/ModalAddQuestion';
import { LIST_QUESTIONS } from '../../mocks';
import styles from './questionUI.module.css';

const renderTime = (name: string, value: string) => {
    return (
        <div className='flex p-2'>
            <small className="text-muted p-2">{name} </small>
            {value}
        </div>
    )
}

const renderHeaderContent = () => (
    <div>
        <div className='d-flex justify-content-between p-3'>
            <h4>
                How to update dynamic multiple inpdate dynamic multiple inpdate dynamic multiple inpdate dynamic multiple inpdate dynamic multiple input (user can add those input themsnput)?
            </h4>
            <button type="button" className={`${styles.ask} btn btn-primary`} data-bs-toggle="modal" data-bs-target="#addQuestion">
                Add question22
            </button>
            <ModalAddQuestion />
        </div>
        <div className="d-flex flex-row mb-3">
            {renderTime("Asked ", "today")}
            {renderTime("Modified ", "today")}
            {renderTime("Viewed  ", "22 times")}
        </div>
    </div>
)

const renderListQuestion = LIST_QUESTIONS.map((question) => (
    <div className='d-flex mb-4 shadow-sm p-1'>
        <div className="d-flex flex-column ">
            <h6>{question.title}</h6>
            <div className={`${styles.font12} p-1`}>{question.createAt}</div>
            <div className="d-flex gap-3">
                <span className={`${styles.font12} ${styles.tags}`}>html</span>
                <span className={`${styles.font12} ${styles.tags}`}>css</span>
                <span className={`${styles.font12} ${styles.tags}`}>js</span>
            </div>
            <div className="d-flex justify-content-between ">
                <span className={styles.font12}>{question.votesNumber} votes</span>
                <span className={styles.font12}>{question.answersNumber} answer</span>
                <span className={styles.font12}>{question.viewsNumber} views</span>
            </div>
        </div>
    </div>
))

function MainPage() {
    return (
        <div className="container" >
            {renderHeaderContent()}
            <hr />
            <div className='d-flex gap-3'>
                <div className='d-flex w-75'>
                    <div className="p-2">
                        <Vote />
                    </div>
                    <div className="p-2">
                        <MainContent />
                    </div>
                </div>
                <div className="p-2 w-25">
                    {renderListQuestion}
                </div>
            </div>
        </div>
    )
}

export default React.memo(MainPage)