import React from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
const Home = (props) => {


    const demo = () => {
        props.getHomeList()
    }
    return (
        <div>react-ssr小轮子-小白{props.name}
            <button onClick={() => demo()}>测试</button>
            {props.dataList.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.home.name,
    dataList: state.home.dataList
})
const mapDispatchToProps = dispatch => (
    {
        getHomeList() {
            dispatch(getHomeList())
        }
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Home)