const BASE_URL = '/v1/notice'

export default {
    DO_NOTICE_LIST_DATE: `${BASE_URL}/list/page/{pageNum}`, //post
    DO_NOTICE_LIST_ALL: `${BASE_URL}/list/all`, //get

    // url만 담당하는 곳이기 때문에 FETCH가 올 수 없음.
}
