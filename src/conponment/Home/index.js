import React from 'react';
const Home = () => {
<<<<<<< HEAD
    const demo = () => {
        alert('ceshi')
    }
    return (
=======
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
>>>>>>> 4b07c34946d9dc66cfda9455192e7996605eedc5
        <div>react服务端渲染-小白


            <button onClick={() => demo()}>测试</button>
<<<<<<< HEAD
=======
>>>>>>> feat:简单同构
>>>>>>> 4b07c34946d9dc66cfda9455192e7996605eedc5
        </div>
    )
}

export default Home