let mysql = require('mysql');

let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root',
    database: '401teamresolve'
})

exports.connection = connection;