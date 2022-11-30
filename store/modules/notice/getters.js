import Constants from './constants'
import state from './state'

export default {
    [Constants.DO_NOTICE_LIST_ALL]: (state) => {
        return state.noticeList
    }
}
