const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')


const server = express()

server.use(express.static('public'))

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


server.get('/', (req, res) => {
    return res.render('homePage.html')
})
server.get('/pointRegister', (req, res) => {
    return res.render('pointRegister.html')
})
server.get('/searchResults', (req, res) => {
    return res.render('searchResults.html')
})

server.listen(3000, () => console.log('Server is running...'))
