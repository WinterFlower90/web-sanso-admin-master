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
        if (payload.params.monthValue != null) paramArray.push(`dateMonth=${payload.params.monthValue}`) //'월' 값이 null이 아니면 paramArray에 '월' 값을 담는다.
        if (payload.params.yearValue != null) paramArray.push(`dateYear=${payload.params.yearValue}`) //'연' 값이 null이 아니면 paramArray에 '연' 값을 담는다.
        if (payload.params.noticeValue != null) paramArray.push(`noticeIsEnable=${payload.params.noticeValue}`) //'유효공지' 값이 null이 아니면 paramArray에 '유효공지' 값을 담는다.
        if (payload.params.searchTitle.length >= 1) paramArray.push(`searchTitle=${payload.params.searchTitle}`) //'검색' 값이 1 이상이면 paramArray에 '검색' 값을 담는다.
        let paramText = paramArray.join('&') //paramText에 paramArray 값을 join한다.

        return axios.get(apiUrls.DO_NOTICE_LIST.replace('{pageNum}', payload.pageNum) + '?' + paramText)
        // 페이징된 공지사항 리스트를 가져오기. - api에서 RequestParam 으로 받는 required 값을 payload에 받는다.
        // v1/notice/list/search/{pageNum}
        // axios.get을 이용하여 공지사항 리스트를 받아오고, {pageNum}은 payload의 pageNum값으로 바꿔준다.
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
