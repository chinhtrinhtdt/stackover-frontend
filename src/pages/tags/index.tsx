import { Link } from "react-router-dom";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
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
        <div>
            <Header />
            <div className="container d-flex align-items-start">
                <Navbar />
                <div className={`${styles.content} px-3 w-100`}>
                    <div className="p-3">
                        <h3>Tags</h3>
                        <p className="py-3">A tag is a keyword or label that categorizes your question with other, similar questions.
                            Using the right tags makes it easier for others to find and answer your question.</p>
                        <div className="w-25 position-relative flex-fill">
                            <i className={`${styles.searchIcon} bi bi-search`}></i>
                            <input className={`${styles.searchInput} form-control form-control-sm`} type="text" placeholder="Filter by tag name..." />
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-3">
                            {renderCardTag}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tags;
