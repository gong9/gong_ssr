import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../conponment/Home/store/reducer'
const reducer =combineReducers({
    home:homeReducer
})

//注意createStore创建的store是单例的
const creatstore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}
export default creatstore