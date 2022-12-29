import Header from "../../components/header";

import styles from "./question.module.css";

function Question() {
  return (
    <div>
      <Header />
      <div className={`${styles.wrapper} container mb-4`}>
        <header className="d-flex align-items-center justify-content-between py-3">
          <h4>Ask a public question</h4>
          <img src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368" className={styles.background} alt="" />
        </header>

        <div className="main w-100">
          <div className={`${styles.width70} border border-primary rounded p-4 mb-3`}>
            <h5 >Writing a good question</h5>
            <p>You’re ready to ask a programming-related question and this form will help guide you through the process.
              Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
            <h6>Steps</h6>
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Add “tags” which help surface your question to members of the community.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>

          <form className="form-question">
            <div className={`${styles.width70} border border-secondary rounded p-4 mb-3`}>
              <h6>Title</h6>
              <p>
                <small>Be specific and imagine you’re asking a question to another person.</small>
              </p>
              <input type="text" className="form-control w" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="w-100 d-flex">
              <div className={`${styles.width70} border border-secondary rounded p-4 mb-3 me-3`}>
                <h6>What are the details of your problem?</h6>
                <p>
                  <small>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</small>
                </p>
                <textarea className="form-control" rows={5}></textarea>
              </div>

              <div className="border border-secondary rounded w-25 mb-3">
                <p className="p-2 m-0 border-bottom ">Adding tags</p>
                <div className="p-2">
                  <p>
                    <small>Tags help ensure that your question will get attention from the right people.</small>
                  </p>
                  <p>
                    <small>Tag things in more than one way so people can find them more easily. Add tags
                      for product lines, projects, teams, and the specific technologies or languages used.</small>
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.width70} border border-secondary rounded p-4 mb-3`}>
              <h6>What did you try and what were you expecting?</h6>
              <p>
                <small>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</small>
              </p>
              <textarea className="form-control" rows={5}></textarea>
            </div>

            <div className={`${styles.width70} border border-secondary rounded p-4 mb-3`}>
              <h6>Tags</h6>
              <p>
                <small>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</small>
              </p>
              <input type="text" className="form-control w" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="eg. (html css javascript" />
            </div>

            <button type="submit" className="btn btn-primary me-3">Review your question</button>
            <button type="button" className="btn btn-outline-secondary">Discard craft</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Question;
