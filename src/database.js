const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    //host: '192.168.2.8',
    host:'localhost',
     user: 'Soporte',
     password: 'Soporte1702861', 
     port: 3306,
     database: 'sigg'
})

function getConnection(params) {
    return connection
}

module.exports = {  
    getConnection
}
