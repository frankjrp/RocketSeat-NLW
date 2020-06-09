//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//atalho para inserir comentários em várias linhas: SHIFT + ALT + A

db.serialize(() => {
    //Com comandos SQL:
    //criar a tabela
    /* db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `) */
    
    //Inserir dados na tabela
    /* const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    ` */            
    
    /* const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ] */


    /* function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)
    } */
    
    //db.run(query, values, afterInsertData)

    //Consultar os dados na tabela
    /* db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }
        
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    }) */

    //Deletar um dado da tabela, comentado só para constar o código
    /* db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
        if(err){
            return console.log(err)
        }
        
        console.log("Registro deletado com sucesso!")
    }) */

})