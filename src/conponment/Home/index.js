import React from 'react';
const Home = () => {
<<<<<<< HEAD
    const log = () => {
        console.log('这是一个服务端事件')
    }
    return (
        <div>
            react服务端渲染-小白

            <button onClick={() => log()}>测试</button>

=======
    const demo = () => {
        alert('ceshi')
    }
    return (
        <div>react服务端渲染-小白


            <button onClick={() => demo()}>测试</button>
>>>>>>> feat:简单同构
        </div>
    )
}

export default Home