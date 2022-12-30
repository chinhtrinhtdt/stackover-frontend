import { ApiSettings } from './api.setting'
import API from './config.api'

export default {
    getApiQuestion() {
        return API.get(ApiSettings.API_GET_QUESTION)
    }

}