import { memo, useState } from 'react';
import { questionApi } from '../../api';

function ModalAddQuestion() {
    const [title, setTitle] = useState<string>('')
    const [textContent, setTextContent] = useState<string>('')
    const [codeContent, setCodeContent] = useState<string>('')
    const [tagName, setTagName] = useState<string>('')

    const validation = () => {
        if(title && textContent && codeContent && tagName) return true
        return false
    }

    const handleSubmit = () => {
        const question = {
            title,
            textContent,
            codeContent,
            tagName
        }

        if(validation()) {
            questionApi.postApiQuestion(question)
        }        
    }

    return (
        <div className="modal fade" id="addQuestion" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add Question</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textContent" className="form-label">What are the details of your problem?</label>
                                <textarea className="form-control" rows={3} id="textContent" name="textContent" onChange={(e) => setTextContent(e.target.value)}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="codeContent" className="form-label">What are the code of your problem?</label>
                                <textarea className="form-control" rows={3} id="codeContent" name="codeContent" onChange={(e) => setCodeContent(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tagName" className="form-label">Tag name</label>
                                <input type="text" className="form-control" id="tagName" name="tagName" onChange={(e) => setTagName(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalAddQuestion)