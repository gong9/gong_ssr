import React from 'react';
const Home = () => {
    const log = () => {
        console.log('这是一个服务端事件')
    }
    return (
        <div>
            ssr小轮子-小白

            <button onClick={() => log()}>测试</button>

        </div>
    )
}

export default Home