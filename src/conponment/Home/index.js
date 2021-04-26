import React from 'react';
import { connect } from 'react-redux'
const Home = (props) => {
    const demo = () => {
        alert('ceshi')
    }
    return (
        <div>react服务端渲染-小白{props.name}
            <button onClick={() => demo()}>测试</button>
        </div>
    )
}
const mapStateToProps = state => ({
    name: state.name
})
export default connect(mapStateToProps, null)(Home)