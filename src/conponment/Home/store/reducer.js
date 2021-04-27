import {
    set_home_list
} from './contants'
const defaultState = {
    name: '小白呀',
    dataList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case set_home_list:
            return {
                ...defaultState,
                dataList: action.data
            }
            default:
                return state
    }
}