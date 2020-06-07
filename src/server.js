const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//pegar o banco de dados
const db = require('./database/db')


server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


server.get('/', (req, res) => {
    return res.render('homePage.html')
})

server.get('/pointRegister', (req, res) => {
    //req.query: São as query strings da nossa URL
    // console.log(req.query)   
    return res.render('pointRegister.html')
})


server.post('/pointRegister', (req, res) => {
    //req.body - Retorna o corpo do formulário, precisa do urlencoded com o extended true
    
    //Inserir dados no DB
    
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.imgUrl,
        req.body.name,
        req.body.address,
        req.body.number,
        req.body.states,
        req.body.cities,
        req.body.itens,
    ]

    function afterInsertData(err){
        if (err){
            return console.log(err)
        }
        return res.render('pointRegister.html', { saved: true })
    }
    
    db.run( query, values, afterInsertData )
    
})

server.get('/searchResults', (req, res) => {

    const search = req.query.searchCity

    if(search == '') {
        return res.render('searchResults.html', { total: 0 })
    }

    //Pegar  TODOS os dados do db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if (err){
            return console.log(err)
        }
        const total = rows.length
        //Mostra a página html com os dados do banco de dados
        return res.render('searchResults.html', { places: rows, total: total })
    })    
})

server.listen(3000, () => console.log('Server is running...'))
