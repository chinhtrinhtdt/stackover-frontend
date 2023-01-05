import { IParamComment } from "../interfaces/api.interfaces";
import { ApiSettings } from "./api.setting";
import API from "./config.api";

const commentApi = {
  getApiComment() {
    return API.get(ApiSettings.API_GET_COMMENT);
  },

  postApiComment(params: IParamComment) {
    return API.post(ApiSettings.API_POST_COMMENT, params);
  },
};
export default commentApi;
