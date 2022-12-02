import Constants from './constants'
import state from './state'

export default {
    [Constants.DO_NOTICE_LIST_ALL]: (state) => {
        return state.noticeList
    },
    [Constants.GET_NOTICE_LIST]: (state) => {
        return state.list
    },
    [Constants.GET_TOTAL_ITEM_COUNT]: (state) => {
        return state.totalItemCount
    },
    [Constants.GET_TOTAL_PAGE]: (state) => {
        return state.totalPage
    },
    [Constants.GET_CURRENT_PAGE]: (state) => {
        return state.currentPage
    },
}
