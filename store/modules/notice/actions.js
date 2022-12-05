import axios from 'axios'
import apiUrls from './api-urls'
import Constants from './constants'

export default {
    [Constants.DO_NOTICE_LIST_DATE]: (store, payload) => {
        // 백이 페이징되어있을 때 : 예. /all/{pageNum}
        return axios.post(apiUrls.DO_NOTICE_LIST_DATE.replace('{pageNum}', payload.pageNum), payload.searchRequest)
        // body가 없다. 그래서 말로 리퀘스트파람으로 들고오는 구조라는 점에서 payload에는 list에서 required로 받아오기로 한 것을 받아온다.
        // v1/member/asdfasdf/2
        // return axios.get(apiUrls.DO_LIST)
    },
    [Constants.DO_NOTICE_LIST_ALL]: (store) => {
        return axios.get(apiUrls.DO_NOTICE_LIST_ALL)
    },
    [Constants.DO_NOTICE_LIST]: (store, payload) => {
        let paramArray = []
        if (payload.params.monthValue != null) paramArray.push(`dateMonth=${payload.params.monthValue}`)
        if (payload.params.yearValue != null) paramArray.push(`dateYear=${payload.params.yearValue}`)
        if (payload.params.noticeIsEnableValue != null) paramArray.push(`noticeIsEnable=${payload.params.noticeIsEnableValue}`)
        if (payload.params.searchTitle.length >= 1) paramArray.push(`searchTitle=${payload.params.searchTitle}`)
        let paramText = paramArray.join('&')

        return axios.get(apiUrls.DO_NOTICE_LIST.replace('{pageNum}', payload.pageNum) + '?' + paramText)
    },
    [Constants.DO_CREATE]: (store, payload) => {
        return axios.post(apiUrls.DO_CREATE, payload)
    },
    [Constants.DO_ENABLE_FALSE]: (store, payload) => {
        return axios.put(apiUrls.DO_ENABLE_FALSE.replace('{noticeId}', payload.id))
    },
    [Constants.DO_UPDATE]: (store, payload) => {
        return axios.put(apiUrls.DO_UPDATE.replace('{noticeId}', payload.noticeId), payload.data)
    },
    [Constants.DO_NOTICE_DETAIL]: (store, payload) => {
        return axios.get(apiUrls.DO_NOTICE_DETAIL.replace('{noticeId}', payload.id))
    },
}
