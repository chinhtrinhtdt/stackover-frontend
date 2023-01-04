import * as React from "react";
import { LIST_IMAGE_USER } from "../../mocks";
import styles from "./UserUI.module.css";
import { useState } from "react";

function UserList() {
  const [checkButtonUserType, setCheckButtonUserType] = useState<number>(0);
  const [checkButtonUserTime, setCheckButtonUserTime] = useState<number>(0);

  const renderButtonUserType = (id: number, htmlfor: string, label: string) => {
    return (
      <>
        <button
          type="button"
          className={`btn border ${
            checkButtonUserType === id ? styles.activeBtn : ""
          }`}
          onClick={() => setCheckButtonUserType(id)}
        >
          {label}
        </button>
      </>
    );
  };
  const renderButtonUserTime = (id: number, htmlfor: string, label: string) => {
    return (
      <>
        <button
          type="button"
          className={`btn  ${
            checkButtonUserTime === id ? styles.activeBtnUserTime : ""
          }`}
          onClick={() => setCheckButtonUserTime(id)}
        >
          {label}
        </button>
      </>
    );
  };
  const renderUserDetail = (img: string) => {
    return (
      <>
        <div
          className={`d-flex flex-row-reverse card mb-3 me-5 mt-2 card-roll ${styles.cardBox}`}
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
        <p className="fs-3 my-4">Users</p>
        <div className={`${styles.container} my-4`}>
          <div className="input-group w-25">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control shadow-none"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div>
            {renderButtonUserType(0, "btnradio2", "New users")}
            {renderButtonUserType(1, "btnradio3", "Voters")}
            {renderButtonUserType(2, "btnradio4", "Editors")}
            {renderButtonUserType(3, "btnradio5", "Moderators")}
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            ></div>
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
            {renderButtonUserTime(0, "btntime1", "week")}
            {renderButtonUserTime(1, "btntime2", "month")}
            {renderButtonUserTime(2, "btntime3", "quater")}
            {renderButtonUserTime(3, "btntime4", "year")}
            {renderButtonUserTime(4, "btntime5", "all")}
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
