import * as React from "react";
import { AVATAR_MODALCOMMENT } from "../../mocks";
import style from "./ModalComment.module.css";

function Maincontent() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div>
            <div className={`modal-content ${style.modalCover}`}>
              <div className={`${style.modalContainer}`}>
                <div className="card m-4">
                  <div className="card-body">
                    <h6 className="card-title">Display name</h6>
                    <div className="card-subtitle mb-2 fw-normal fs-7  ">
                      <div className={style.cardSub}>
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
                            src={AVATAR_MODALCOMMENT}
                            className="img-thumbnail "
                            alt="..."
                          />
                        </div>
                        <div className="col-10">
                          <h6 className="card-title">Profile picture</h6>
                          <div className="card-subtitle mb-2 fw-normal fs-7  ">
                            <div className={style.cardSub}>
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
                        <h6 className="card-title mt-2">
                          Technology tags that interest you
                        </h6>
                        <div className="card-subtitle mb-2 fw-normal fs-7  ">
                          <div className={style.cardSub}>
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
                          <div className={style.cardSub}>
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
                      <div className={style.cardSub}>
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
