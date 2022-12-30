import { memo } from 'react'

function ModalAddQuestion() {
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
                                <input type="text" className="form-control" id="title" name="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="problem" className="form-label">What are the details of your problem?</label>
                                <textarea className="form-control" rows={3} id="problem" name="problem"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expect" className="form-label">What did you try and what were you expecting?</label>
                                <textarea className="form-control" rows={3} id="expect" name="expect" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tags" className="form-label">Tags</label>
                                <input type="text" className="form-control" id="tags" name="tags" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalAddQuestion)