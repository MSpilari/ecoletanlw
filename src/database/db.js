//Verbose é um método que configura o sqlite dizendo para ele me mostrar msgs no terminal 
const sqlite3 = require('sqlite3').verbose()

//Criando o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

//Utilizar o objeto banco de dados para nossas operações
//Esse método serialize roda uma sequência de códigos
db.serialize( () => {
    // 1 - Criando uma tabela com comando sql
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // 2 - Inserindo dados na tabela
    
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "N°260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err){
    //     if (err){
    //         return console.log(err)
    //     }
    //     console.log('Cadastrado com sucesso')
    //     console.log(this)
    // }
    
    // db.run( query, values, afterInsertData )
    
    // 3 - Consultando os dados da tabela
    
    // * significa todos os dados do banco
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if (err){
    //         return console.log(err)
    //     }
    //     console.log('Aqui estão seus registros:')
    //     console.log(rows)
    // })
    
    // //Apenas os nomes do banco de dados 
    // db.all(`SELECT name FROM places`, function(err, rows){
    //     if (err){
    //         return console.log(err)
    //     }
    //     console.log('Aqui estão seus registros:')
    //     console.log(rows)
    // })
    
    // 4 - Deletando dados da tabela

    // db.run('DELETE FROM places WHERE id = ?', [3], function(err){
    //     if (err){
    //         return console.log(err)
    //     } 
    //     console.log('Registro deletado com sucesso')     
    // })
    
    // db.run('DELETE FROM places', function(err){
    //     if (err){
    //         return console.log(err)
    //     } 
    //     console.log('Todos elementos deletados com sucesso.')     
    // })
})

module.exports = db