import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Route from '../route.js'
const app = express()
app.use(express.static('public'))

/**
 * 传统的reactDom.render 将虚拟dom转为真实dom
 * 这里renderToString，是将虚拟dom装换为html字符串
 * 
 * ssr的好处
 * - 首屏
 * - seo
 * 弊端
 * - 一个消耗客户端的性一个消耗服务端的性能
 */
app.get('*', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>宫小白ssr</title>
            <head>
            <body>
                <div id="root">${renderToString(<StaticRouter context={{}} location={req.path}>{Route}</StaticRouter>)}</div>
                <script src='/index.js'></script>
            </body>
        </html>
    `)

})

app.listen(3000, () => {
    console.log(`服务器在3000端口成功启动`);
})
