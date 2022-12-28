import * as React from 'react';
import Maincontent from '../../Components/Maincontent';
import Vote from '../../Components/Vote';
import "./Question.css"

const rendertime = (name: string, value: string) => {
    return (
        <div className='flex p-2'>
            <small className="text-muted p-2">{name} </small>
            {value}
        </div>
    )
}

const rendertitlepart = () => {
    return (
        <div>
            <div className='d-flex'>
                <h2>
                    How to update dynamic multiple input (user can add those input themself)?
                </h2>
                <button type="button" className="btn btn-primary btn-ask"  >Ask Question</button>
            </div>
            <div className="d-flex flex-row mb-3">
                {rendertime("Asked ", "today")}
                {rendertime("Modified ", "today")}
                {rendertime("Viewed  ", "22 times")}
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



function Index() {
    return (
        <>
            <div className="container" >
                {rendertitlepart()}
                <hr />
                <div className='d-flex'>
                    <div className='d-flex'>
                        <div className="p-2 w-32 ">
                            <Vote />
                        </div>
                        <div className="p-2 w-32">
                            <Maincontent />
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

export default React.memo(Index)