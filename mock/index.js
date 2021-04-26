const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/getHomeList', (req, res) => {
    res.json(
        [
            {
                id: 1,
                name: '宫小白'
            },
            {
                id: 2,
                name: '宫大白'
            }
        ]
    )
})
app.listen(8001, () => {
    console.log('mock监听在8001端口');
})