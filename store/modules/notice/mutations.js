import Constants from './constants'
import state from './state'

export default {
    [Constants.FETCH_NOTICE_LIST_ALL]: (state, payload) => {
        state.noticeList = payload
    }
}
