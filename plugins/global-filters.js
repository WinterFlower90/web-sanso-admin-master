import Vue from 'vue'

Vue.filter('currency', val => val.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,"))
Vue.filter('percent', val => val + "%")
Vue.filter('datetime', val => {
    let timestamp = val * 1000
    let date = new Date(timestamp)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    return `${year}.${month}.${day} ${hour}:${min}`
})
