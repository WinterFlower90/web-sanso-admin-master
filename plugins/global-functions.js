import Vue from 'vue'

Vue.prototype.$convertFormatPriceToNumber = (formatPrice) => {
    if (formatPrice === '0') {
        return 0
    } else {
        return Number(formatPrice.replace(/,/gi, ""))
    }
}
Vue.prototype.$convertFormatPriceToNumberText = (formatPrice) => {
    if (formatPrice === 0) {
        return '0'
    } else {
        let regexp = /\B(?=(\d{3})+(?!\d))/g
        return formatPrice.toString().replace(regexp, ',')
    }
}
Vue.prototype.$convertFormatPricePercentage = (standardPrice, formatPrice) => {
    if(standardPrice > 0 && formatPrice > 0) {
        return Math.round((formatPrice / standardPrice * 100) * 10) / 10
    } else {
        return 0
    }
}
