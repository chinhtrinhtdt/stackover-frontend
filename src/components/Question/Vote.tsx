import * as React from 'react';
import style from "./Question.module.css";

function Vote() {
    return (
        <>
            <div>
                <i className={`${style.link_improve} bi bi-caret-up-fill fs-2`}></i>
                <div className=''>
                    220
                </div>
                <i className={`${style.link_improve} bi bi-caret-up-fill fs-2`}></i>
                <i className={`${style.link_improve} bi bi-bookmark fs-5`}></i>
                <i className={`${style.link_improve} bi bi-arrow-clockwise fs-5`}></i>
            </div>
        </>
    )
}
export default React.memo(Vote)