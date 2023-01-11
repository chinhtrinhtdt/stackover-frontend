import { IParamQuestion, IParamComment, IParamVote } from "../interfaces/api.interfaces";
import { ApiSettings } from "./api.setting";
import API from "./config.api";

const questionApi = {
  getApiQuestion() {
    return API.get(ApiSettings.API_GET_QUESTION);
  },

  getApiQuestionDetail( id: number | string ) {
    return API.get(`${ApiSettings.API_GET_QUESTION_DETAIL}${id}`);
  },

  postApiQuestion(params: IParamQuestion) {
    return API.post(ApiSettings.API_POST_QUESTION, params);
  },
  
  getApiComment() {
    return API.get(ApiSettings.API_GET_COMMENT);
  },

  postApiComment(params: IParamComment) {
    return API.post(ApiSettings.API_POST_COMMENT, params);
  },

  getApiVote(id: number | string){
    return API.get(`${ApiSettings.API_GET_VOTE_DETAIL}${id}`);
  },

  postApiVote(params: IParamVote) { 
    return API.post(ApiSettings.API_POST_VOTE, params);
  }
};

export default questionApi;


