const defaultState = {
    name: '小白呀'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'set_home_list':
            return 
        default:
            return state
    }
}