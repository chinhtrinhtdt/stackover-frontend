import * as React from 'react';
import style from "./question.module.css";

function Vote() {
    return (
        <>
            <div>
                <i className={`${style.linkImprove} bi bi-caret-up-fill fs-2`}></i>
                <div className={`${style.iconText}`}>
                    220
                </div>
                <i className={`${style.linkImprove} bi bi-caret-up-fill fs-2`}></i>
                <br/>
                <div className={`${style.iconText}`}>
                <i className={`${style.linkImprove} bi bi-bookmark fs-5`}></i>
                </div>
                <div className={`${style.iconText}`}>
                <i className={`${style.linkImprove} bi bi-arrow-clockwise fs-5`}></i>
                </div>
            </div>
        </>
    )
}
export default React.memo(Vote)