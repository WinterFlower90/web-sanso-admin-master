import Constants from './constants'
import state from './state'

export default {
    [Constants.FETCH_LOADING_SHOW]: (state, payload) => {
        state.loadingShow = payload
    }
}
