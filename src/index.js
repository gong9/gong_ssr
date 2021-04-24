import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from './conponment/Home/index.js'
const app = express()

app.get('/', (req, res) => {
    res.send(`${renderToString(<Home />)}`)

})

app.listen(3000, () => {
    console.log(`服务器在3000端口成功启动`);
})
