import Constants from './constants'
import state from './state'

export default {
    [Constants.GET_MENUS_LIST]: (state) => {
        return state.globalMenu
    },
    [Constants.GET_SELECTED_MENU]: (state) => {
        let result = []
        state.globalMenu.forEach(function (element1) {
            let tempParentName = element1.parentName
            element1.menuLabel.forEach(function (element2) {
                if (element2.id === state.selectedMenu){
                    result.push(tempParentName)
                    result.push(element2.currentName)
                }
            })
        })
        return result
    }
}
