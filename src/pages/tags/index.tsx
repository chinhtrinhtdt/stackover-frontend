import { Link } from "react-router-dom";
import { LIST_TAGS } from "../../mocks";
import styles from "./tags.module.css";

function Tags() {

    const renderCardTag = LIST_TAGS.map((tag) =>
        <div className={`${styles.w24} card shadow-sm`}>
            <div className="card-body">
                <Link to="./#">
                    <h5 className="card-title fs-6 ">{tag.name}</h5>
                </Link>
                <p className="card-text fs-6">{tag.description}</p>
            </div>
        </div>)

    return (
        <div className="p-3">
            <h3>Tags</h3>
            <p className="py-3">A tag is a keyword or label that categorizes your question with other, similar questions.
                Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="d-flex align-items-center justify-content-between">
                <div className="w-25 position-relative">
                    <i className={`${styles.searchIcon} bi bi-search`}></i>
                    <input className={`${styles.searchInput} form-control`} type="text" placeholder="Filter by tag name..." />
                </div>
                <div className="border rounded">
                    <button className="btn btn-sm p-2 border-end btn-secondary">Popular</button>
                    <button className="btn btn-sm p-2 border-end">Name</button>
                    <button className="btn btn-sm p-2">New</button>
                </div>
            </div>
            <div className="d-flex flex-wrap gap-2 my-3">
                {renderCardTag}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-end">
                    <li className="page-item page-link disabled">Previous</li>
                    <li className="page-item page-link">1</li>
                    <li className="page-item page-link">2</li>
                    <li className="page-item page-link">3</li>
                    <li className="page-item page-link">Next</li>
                </ul>
            </nav>
        </div>
    );
}

export default Tags;
