import { IParamLogin, IParamRegister } from "../interfaces/api.interfaces"
import { ApiSettings } from "./api.setting"
import myClient from "./config.api"

const authApi = {
    postApiRegister(params: IParamRegister) {
        return myClient.post(ApiSettings.API_POST_REGISTER, params)
    },

    postApiLogin(params: IParamLogin) {
        return myClient.post(ApiSettings.API_POST_REGISTER, params)
    }
}

export default authApi
