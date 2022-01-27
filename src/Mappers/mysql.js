let mysql = require('mysql');

let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'root',
    database: '401teamresolve'
})

connection.connect();

let query = "SELECT * FROM adminusers"

connection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});