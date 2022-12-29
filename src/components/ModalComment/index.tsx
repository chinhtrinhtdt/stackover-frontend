import * as React from "react";
import style from "./ModalComment.module.css";

function Maincontent() {
  return (
    <>
      <div
        className="modal fade modal-box"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ width: "100%", margin: "0 auto" }}
            >
              <div
                className="text-center"
                style={{ width: "35%", margin: "0 auto" }}
              >
                <div className="text-center">You’re almost done!</div>
                <br />
                <div className="text-center">
                  You are about to create a new account on{" "}
                  <b>Stack Overflow </b>
                  using a login from <i className="bi bi-google"></i> Google
                  (duonghuongs2v@gmail.com)
                </div>
                <br />
                <div className="text-center ">
                  Share a little more about yourself, and we’ll show you more
                  relevant questions.
                </div>
              </div>
              <div style={{ width: "40%", margin: "0 auto" }}>
                <div className="card m-4">
                  <div className="card-body">
                    <h5 className="card-title">Display name</h5>
                    <div className="card-subtitle mb-2 fw-normal fs-7  ">
                      <div className={style.card_sub}>
                        Your display name will be shown on your posts and
                        comments.
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        //   value="Hương Dương"
                        />
                      </div>
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="https://www.gravatar.com/avatar/59df9b9c6a027d9512817a5e01f1d765?s=64&d=identicon&r=PG"
                            className="img-thumbnail "
                            alt="..."
                          />
                        </div>
                        <div className="col-10">
                          <h5 className="card-title">Profile picture</h5>
                          <div className="card-subtitle mb-2 fw-normal fs-7  ">
                            <div className={style.card_sub}>
                              Adding a photo can make it easier for others to
                              recognize you.
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Pick Photo
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h5 className="card-title mt-4">
                          Technology tags that interest you
                        </h5>
                        <div className="card-subtitle mb-2 fw-normal fs-7  ">
                          <div className={style.card_sub}>
                            Picking tags will help us show you much more
                            relevant questions and answers.
                          </div>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          placeholder="javascript, java, c#, php, jquery, python, android, ios"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          <div className={style.card_sub}>
                            Opt-in to receive occasional product updates, user
                            research invitations, company announcements, and
                            digests
                          </div>
                        </label>
                      </div>
                      <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button">
                          Create my account
                        </button>
                      </div>
                    </form>
                    <div className="card-subtitle mb-2 fw-normal mt-4  ">
                      <div className={style.card_sub}>
                        By clicking “Create my account”, you agree to our terms
                        of service, privacy policy and cookie policy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(Maincontent);
