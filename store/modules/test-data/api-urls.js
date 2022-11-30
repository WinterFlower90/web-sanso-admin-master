const BASE_URL = '/v1/member'

export default {
    DO_LIST: `${BASE_URL}/information/{pageNum}`, //get
    DO_DETAIL: `${BASE_URL}/nickname`, //get
    DO_UPDATE: `${BASE_URL}/{id}`, //put
    DO_DELETE: `${BASE_URL}/{id}`, //del
}
