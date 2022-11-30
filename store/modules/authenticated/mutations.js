import Constants from './constants'
import state from './state'

export default {
    [Constants.REMOVE_TOKEN]: (state) => {
        window.$nuxt.$cookies.remove('token')
    },

    [Constants.FETCH_TOKEN]: (state, payload) => {
        window.$nuxt.$cookies.set('token', payload, {
            path: '/',
            maxAge: 36000
        })
    },
    [Constants.FETCH_NICK_NAME]: (state, payload) => {
        state.nickName = payload
    },
}
