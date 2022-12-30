import * as React from "react";
import ModalComment from "../QuestionComp/ModalComment";
import style from "./Question.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { question } from "../../api";

interface IStatequestion{

}
function Maincontent() {
  const [posts, setPosts] = useState([]);
  const [data1, setData] = useState<any>({name:"aaa"});
  useEffect(() => {

  question.getApiQuestion()
    // .then((res) => console.log(22,res.data[1].textContent))
    .then((res) => setData(res.data[0]))
    .catch((e) => console.log(e))
    console.log(14, data1)

  }, [posts]);

  return (
 
    <div>
         
       <div>
         {data1.textContent}
       </div>
        
          
        
      <br />
      
      <div className={`overflow-auto ${style.containerCode}`}>
        <p>
          {data1.codeContent}
        </p>
      </div>
     
      <div className="d-flex mb-4 mt-4">
        <button type="button" className="btn btn-secondary m-2">
          {/* {data1.tag.name} */}
        </button>
       
      </div>
      <div className="d-flex justify-content-between">
        <div className="p-2 w-32 ">
          <a href="" className={style.link_improve}>
            Share{" "}
          </a>
          <a href="" className={style.link_improve}>
            Improve this question{" "}
          </a>
          <a href="" className={style.link_improve}>
            Follow{" "}
          </a>
        </div>
        <div
          className={`d-flex flex-row-reverse card mb-3 card-roll ${style.card_box}`}
        >
          <div className="row g-0 d-flex ">
            <div className="p-2 fs-6">
              <small>asked Feb 11, 2019 at 15:18</small>
            </div>
            <div className="col-md-2 m-2">
              <img
                src="https://i.stack.imgur.com/kKetn.jpg?s=64&g=1"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 ">
              <div className="m-2">
                <h5 className="card-title fs-6">devserkan</h5>
                <div className="d-flex">
                  <div>16.3k</div>
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-dot"></i>
                    </div>
                    <div>4</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-dot"></i>
                    </div>
                    <div>3</div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-dot"></i>
                    </div>
                    <div>26</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalLong"
        >
          Add a comment
        </button>

        <ModalComment />
      </div>
    </div>
  );
}

export default React.memo(Maincontent);
