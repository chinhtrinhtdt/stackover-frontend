import { memo, useState } from 'react';
import { questionApi } from '../../api';
import styles from './ModalAddQuestion.module.css';
import { checkToken } from '../../helper/utils';
import { Link } from 'react-router-dom';

interface IPropsModalAddQuestion {
    getReloadData: () => void;
}

function ModalAddQuestion(props: IPropsModalAddQuestion) {
    const { getReloadData } = props;

    const [title, setTitle] = useState<string>('');
    const [textContent, setTextContent] = useState<string>('');
    const [codeContent, setCodeContent] = useState<string>('');
    const [tagName, setTagName] = useState<string>('');

    const validation = () => {
        if (title && textContent && codeContent && tagName) return true;
        return false;
    };

    const resetStateInput = () => {
        setTitle('');
        setTextContent('');
        setCodeContent('');
        setTagName('');
    };

    const handleSubmit = () => {
        const question = {
            title,
            textContent,
            codeContent,
            tagName
        };
        document.querySelector(".modal-add-question")?.classList.add("was-validated");

        if (!validation()) return;

        document.querySelector(".modal-add-question")?.classList.remove("was-validated");
        resetStateInput();

        questionApi.postApiQuestion(question)
            .then(res => getReloadData())
            .catch(err => console.log(err))
    };

    return (
        <div className="modal fade" id="addQuestion" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            {checkToken() ?
                <div className="modal-dialog modal-lg modal-dialog-centered ">
                    <div className={`${styles.modalContent} modal-content`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Question</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={`${styles.modalBody} modal-body`}>
                            <form className='modal-add-question'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                    <div className="invalid-feedback"> Please fill a title.</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="textContent" className="form-label fw-bold">What are the details of your problem?</label>
                                    <textarea className={`${styles.textarea} form-control`} rows={3} id="textContent" name="textContent" value={textContent} onChange={(e) => setTextContent(e.target.value)} required />
                                    <div className="invalid-feedback"> Please fill a problem.</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="codeContent" className="form-label fw-bold">What are the code of your problem?</label>
                                    <textarea className={`${styles.textarea} form-control`} rows={3} id="codeContent" name="codeContent" value={codeContent} onChange={(e) => setCodeContent(e.target.value)} required />
                                    <div className="invalid-feedback"> Please fill a code.</div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tagName" className="form-label fw-bold">Tag name</label>
                                    <input type="text" className="form-control" id="tagName" name="tagName" value={tagName} onChange={(e) => setTagName(e.target.value)} required />
                                    <div className="invalid-feedback"> Please fill a tag.</div>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss={validation() ? "modal" : ""} onClick={handleSubmit}>Submit</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className="modal-dialog modal-dialog-centered ">
                    <div className={`${styles.modalContent} modal-content`}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Join the Stack Overflow community</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>You must be logged in to ask a question on Stack Overflow</h6>
                            <div data-bs-dismiss="modal" className='my-2 mt-3'>
                                <span>You want to Login?</span> <Link to="/login">Click here</Link>
                            </div>
                            <div data-bs-dismiss="modal">
                                <span>You want to Register?</span> <Link to="/register">Click here</Link>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </div>
    );
}

export default memo(ModalAddQuestion)
