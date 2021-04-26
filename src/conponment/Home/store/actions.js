import axios from 'axios'

export const setHomeList = (data) => (
    {
        type: 'set_home_list',
        data
    }
)
export const getHomeList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8001/getHomeList').then(res => {
            dispatch(setHomeList(res.data))
        })
    }
}