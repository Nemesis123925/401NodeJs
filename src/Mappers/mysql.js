let config = require("./mysqlConfig")

let connection = config.connection

let query = "SELECT password FROM adminusers WHERE username = '"
let insert = "INSERT INTO adminusers(username,password) VALUE('"
let sql = ""

function addUser(res, username, password){
    sql = insert + username + "', '" + password + "')"
    connection.query(sql, function(error, results, fields){
        if (error && error.code === 'ER_DUP_ENTRY') {
            console.log("Duplicated")
            res.end("Duplicated")
        }else{
            console.log(results);
            res.end("success")
        }
    })
}

function checkUser(res, username, password){
    sql = query + username +  "'"
    connection.query(sql, function(error, results, fields){
        console.log(results)
        if (error) {
            throw error
            /*console.log("Duplicated")
            res.end("Duplicated")*/
        }else if(!results.length) {
            res.end("fail, wrong username")
        }else{
            results = JSON.parse(JSON.stringify(results))
            if(results[0].password === password){
                res.end("success")
            }else{
                res.end("failed, wrong password")
            }
            //res.end("success")
        }
    })
}
/*

connection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

addUser("abc", "12334444")
*/

exports.addUser = addUser;
exports.checkUser = checkUser;