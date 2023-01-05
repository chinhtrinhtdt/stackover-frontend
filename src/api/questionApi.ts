import { IParamQuestion,IParamComment } from "../interfaces/api.interfaces";
import { ApiSettings } from "./api.setting";
import API from "./config.api";

export const questionApi = {
  getApiQuestion() {
    return API.get(ApiSettings.API_GET_QUESTION);
  },

  postApiQuestion(params: IParamQuestion) {
    return API.post(ApiSettings.API_POST_QUESTION, params);
  },
};

export const commentApi = {
    getApiComment() {
      return API.get(ApiSettings.API_GET_COMMENT);
    },
  
    postApiComment(params: IParamComment) {
      return API.post(ApiSettings.API_POST_COMMENT, params);
    },
  };

