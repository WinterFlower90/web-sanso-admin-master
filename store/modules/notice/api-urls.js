const BASE_URL = '/v1/notice'

export default {
    DO_NOTICE_LIST_DATE: `${BASE_URL}/list/page/{pageNum}`, //post
    DO_NOTICE_LIST_ALL: `${BASE_URL}/list/all`, //get
    DO_CREATE: `${BASE_URL}/new`, //post
    DO_ENABLE_FALSE: `${BASE_URL}/enable/{noticeId}`, //put 공지사항 게시 해제하기
    DO_UPDATE: `${BASE_URL}/put/{noticeId}`, //put 공지사항 수정하기
    DO_NOTICE_DETAIL: `${BASE_URL}/detail/{noticeId}`, //get
    // url만 담당하는 곳이기 때문에 FETCH가 올 수 없음.
}
