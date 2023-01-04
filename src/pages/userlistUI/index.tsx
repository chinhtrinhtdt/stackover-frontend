import * as React from "react";
import { LIST_IMAGE_USER } from "../../mocks";
import styles from "./UserUI.module.css";

function UserList() {
  const renderButtonUserType = (id: string, htmlfor: string, label: string) => {
    return (
      <>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id={id}
          autoComplete="off"
          defaultChecked
        />
        <label className="btn btn-outline-secondary" htmlFor={htmlfor}>
          {label}
        </label>
      </>
    );
  };
  const renderButtonUserTime = (id: string, htmlfor: string, label: string) => {
    return (
      <>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id={id}
          autoComplete="off"
          defaultChecked
        />
        <label className={`${styles.itemTime} btn btn-link`} htmlFor={htmlfor}>
          {label}
        </label>
      </>
    );
  };
  const renderUserDetail = (img: string) => {
    return (
      <>
        <div
          className={`d-flex flex-row-reverse card mb-3 me-5 mt-4 card-roll ${styles.cardBox}`}
        >
          <div className="row g-0 d-flex ">
            <div className="col-md-2 m-2">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 ">
              <div className="">
                <a href="#">devserkan</a>
                <br />

                <small>India</small>
                <br />
                <small>
                  <b>1,231</b>
                </small>
                <div>
                  <a href="#">flutter, dart, reactjs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="ms-4 mb-2">
        <p className="fs-3 my-4">User</p>
        <div className={`${styles.container} my-4`}>
          <div className="input-group w-25">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              {renderButtonUserType("btnradio1", "btnradio1", "Reputation")}
              {renderButtonUserType("btnradio2", "btnradio2", "New users")}
              {renderButtonUserType("btnradio3", "btnradio3", "Voters")}
              {renderButtonUserType("btnradio4", "btnradio4", "Editors")}
              {renderButtonUserType("btnradio5", "btnradio5", "Moderators")}
            </div>
            <br />
          </div>
        </div>
        <div
          className={`${styles.itemTimeContainer} btn-group`}
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <div></div>
          <div>
            {renderButtonUserTime("btntime1", "btntime1", "week")}
            {renderButtonUserTime("btntime2", "btntime2", "month")}
            {renderButtonUserTime("btntime3", "btntime3", "quater")}
            {renderButtonUserTime("btntime4", "btntime4", "year")}
            {renderButtonUserTime("btntime5", "btntime5", "all")}
          </div>
        </div>

        <div className={`${styles.listUser} d-flex  flex-wrap mt-4 w-100`}>
          {LIST_IMAGE_USER.map((user: string, index: number) => {
            return <>{renderUserDetail(user)}</>;
          })}
        </div>
      </div>
    </>
  );
}

export default React.memo(UserList);
