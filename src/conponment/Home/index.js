import React from 'react';
const Home = () => {
    const demo = () => {
        alert('ceshi')
    }
    return (
        <div>react服务端渲染-小白


            <button onClick={() => demo()}>测试</button>
        </div>
    )
}

export default Home