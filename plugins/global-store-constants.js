import Vue from 'vue'

import customLoadingConstants from '~/store/modules/custom-loading/constants'
Vue.prototype.$customLoadingConstants = customLoadingConstants

import authenticatedConstants from '~/store/modules/authenticated/constants'
Vue.prototype.$authenticatedConstants = authenticatedConstants

import menuConstants from '~/store/modules/menu/constants'
Vue.prototype.$menuConstants = menuConstants

import testDataConstants from '~/store/modules/test-data/constants'
Vue.prototype.$testDataConstants = testDataConstants

import noticeConstants from '~/store/modules/notice/constants'
Vue.prototype.$noticeConstants = noticeConstants
