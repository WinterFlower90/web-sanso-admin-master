import Constants from './constants'
import state from './state'

export default {
    [Constants.GET_LOADING_SHOW]: (state) => {
        return state.loadingShow
    }
}
