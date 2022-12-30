import * as React from 'react';
import MainContent from '../../components/Question/MainContent';
import Vote from '../../components/Question/Vote';

import "./Question.css"
import AddQuestion from '../../components/add-question';

const renderTime = (name: string, value: string) => {
    return (
        <div className='flex p-2'>
            <small className="text-muted p-2">{name} </small>
            {value}
        </div>
    )
}

const renderTitlePart = () => {
    return (
        <div>
            <div className='d-flex justify-content-between p-3'>
                <h4>
                    How to update dynamic multiple input (user can add those input themsnput)?
                </h4>
                <button type="button" className="btn btn-primary btn-ask " data-bs-toggle="modal" data-bs-target="#addQuestion">
                    Add question
                </button>
                <AddQuestion />
            </div>
            <div className="d-flex flex-row mb-3">
                {renderTime("Asked ", "today")}
                {renderTime("Modified ", "today")}
                {renderTime("Viewed  ", "22 times")}
            </div>
        </div>
    )
}

const renderRelateBlog = () => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}



function MainPage() {
    return (
        <>
            <div className="container" >
                {renderTitlePart()}
                <hr />
                <div className='d-flex'>
                    <div className='d-flex'>
                        <div className="p-2 w-32 ">
                            <Vote />
                        </div>
                        <div className="p-2 w-32">
                            <MainContent />
                        </div>
                    </div>
                    <div className="p-2 w-32">
                        {renderRelateBlog()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(MainPage)