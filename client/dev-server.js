const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.use(express.static(__dirname + 'public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/:path', (req, res) => {
    res.sendFile(__dirname + `/public/${req.params['path']}`)
})

app.get('/bundle/:path', (req, res) => {
    res.sendFile(__dirname + `/public/bundle/${req.params['path']}`)
})

app.listen(3000, err => {
    if (err) {
        console.log(err)
    }
    console.log('server start at port 3000')
})
