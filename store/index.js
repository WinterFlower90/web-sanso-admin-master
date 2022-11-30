import customLoading from './modules/custom-loading'
import authenticated from './modules/authenticated'
import menu from './modules/menu'
import testData from './modules/test-data'
import notice from './modules/notice'

export const state = () => ({})

export const mutations = {}

export const modules = {
    customLoading,
    authenticated,
    menu,
    testData,
    // 웹에서 F12 consol.log 찍었을 때 경로대로 받지 못하고 있었음. 상수 문제일 경우 추가 했는지 볼 것.
    notice
}
