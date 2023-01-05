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
          } ${styles.containerButtonUserType}`}
          onClick={() => setCheckButtonUserType(id)}
        >
          <div className="fs-6">{label}</div>
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
          } ${styles.containerButtonUserTime}`}
          onClick={() => setCheckButtonUserTime(id)}
        >
          {label}
        </button>
      </>
    );
  };
  const renderUserDetail = () => {
    return LIST_IMAGE_USER.map((user) => (
      <div
        className={`d-flex flex-row-reverse card mb-5 me-4  card-roll ${styles.cardBox}`}
      >
        <div className={`${styles.containUser} row g-0 d-flex`}>
          <div className={`${styles.imgSize} col-md-2 m-2`}>
            <img src={user.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="fs-6">
              <a href="#">{user.nameUser}</a>
              <div className={`${styles.techType}`}>{user.nationality}</div>
              <div className={`${styles.techType}`}>
                <b>1,231</b>
              </div>
              <div className={`${styles.techType}`}>
                <a href="#">{user.techType}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className="ms-2 mb-2">
        <p className="fs-3 my-4">Users</p>
        <div className={`${styles.container} my-4`}>
          <div className="input-group w-25">
            <div className="w-25 position-relative flex-fill">
              <i className={`${styles.searchIcon} bi bi-search`}></i>
              <input
                className={`${styles.searchInput} form-control form-control-sm`}
                type="text"
                placeholder="Filter by tag name..."
              />
            </div>
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            {renderButtonUserType(0, "btnradio1", "Reputation")}
            {renderButtonUserType(1, "btnradio2", "New users")}
            {renderButtonUserType(2, "btnradio3", "Voters")}
            {renderButtonUserType(3, "btnradio4", "Editors")}
            {renderButtonUserType(4, "btnradio5", "Moderators")}
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
          {renderUserDetail()}
        </div>
      </div>
    </>
  );
}

export default React.memo(UserList);