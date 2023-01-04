import { IParamQuestion } from '../interfaces/api.interfaces'
import { ApiSettings } from './api.setting'
import API from './config.api'

const questionApi = {
    getApiQuestion() {
        return API.get(ApiSettings.API_GET_QUESTION)
    },
    postApiQuestion(params: IParamQuestion) {
        return API.post(ApiSettings.API_POST_QUESTION, params)
    }
}



export default questionApi