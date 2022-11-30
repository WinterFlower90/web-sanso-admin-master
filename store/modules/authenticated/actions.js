import axios from 'axios'
import apiUrls from './api-urls'
import Constants from './constants'

export default {
    [Constants.DO_LOGIN]: (store, payload) => {
        return axios.post(apiUrls.DO_LOGIN, payload)
            .then((res) => {
                store.commit(Constants.FETCH_TOKEN, res.data.data.token)
                store.commit(Constants.FETCH_NICK_NAME, res.data.data.nickName)
            })
    },
    [Constants.DO_LOGOUT]: (store) => {
        store.commit(Constants.REMOVE_TOKEN)
    },
    [Constants.DO_PASSWORD_CHANGE]: (store, payload) => {
        return axios.put(apiUrls.DO_PASSWORD_CHANGE, payload)
    },
    [Constants.DO_PROFILE]: (store) => {
        return axios.get(apiUrls.DO_PROFILE)
    }
}
