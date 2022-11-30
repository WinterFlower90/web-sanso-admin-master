import Constants from './constants'
import state from './state'

export default {
    [Constants.GET_NICK_NAME]: (state) => {
        return state.nickName
    }
}
