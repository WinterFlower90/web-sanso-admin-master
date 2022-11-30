import axios from 'axios'
import apiUrls from './api-urls'
import Constants from './constants'

export default {
    [Constants.DO_LIST]: (store,payload) => {
        // 백이 페이징되어있을 때 : 예. /all/{pageNum}
        return axios.get(apiUrls.DO_LIST.replace('{pageNum}', payload.pageNum) + '?memberInformationType=' + payload.searchType)
        // body가 없다. 그래서 말로 리퀘스트파람으로 들고오는 구조라는 점에서 payload에는 list에서 required로 받아오기로 한 것을 받아온다.
        // v1/member/asdfasdf/2
        // return axios.get(apiUrls.DO_LIST)
    },
    [Constants.DO_DETAIL]: (store, payload) => {
        return axios.get(apiUrls.DO_DETAIL.replace('{nickName}', payload.id))
    },
    [Constants.DO_UPDATE]: (store, payload) => {
        return axios.get(apiUrls.DO_UPDATE.replace('{id}', payload.id))
    },
    [Constants.DO_DELETE]: (store, payload) => {
        return axios.get(apiUrls.DO_DELETE.replace('{id}', payload.id))
    },
}
