import Constants from './constants'
import state from './state'

export default {
    [Constants.FETCH_SELECTED_MENU]: (state, payload) => {
        state.selectedMenu = payload
    }
}
