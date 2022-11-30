import axios from 'axios'

function tokenHandler(config, context) {
    if (context.app.context.app.$cookies.get('token')) {
        config.headers.common['Authorization'] = 'Bearer ' + context.app.context.app.$cookies.get('token')
    }
    return config
}

export default (context) => {
    axios.interceptors.request.use(config => tokenHandler(config, context),
        function (error) {
            console.log(error)
        }
    )
}
