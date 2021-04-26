import React from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
const Home = (props) => {


    const demo = () => {
        props.getHomeList()
    }
    return (
        <div>react服务端渲染-小白{props.name}
            <button onClick={() => demo()}>测试</button>
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.home.name
})
const mapDispatchToProps = dispatch => (
    {
        getHomeList() {
            dispatch(getHomeList())
        }
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Home)