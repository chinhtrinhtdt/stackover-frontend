import { ApiSettings } from './api.setting'
import API from './config.api'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getApiQuestion() {
        return API.get(ApiSettings.API_GET_QUESTION)
    },
    postApiQuestion(params: object) {
        return API.post(ApiSettings.API_POST_QUESTION, params)
    }

}