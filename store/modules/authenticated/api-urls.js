const BASE_URL = '/v1'

export default {
    DO_LOGIN: `${BASE_URL}/login/web/admin`, //post
    DO_PASSWORD_CHANGE: `${BASE_URL}/profile/password`, //put
    DO_PROFILE: `${BASE_URL}/profile/info`, //get
}
