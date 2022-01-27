var express = require("express");
var app = express();

app.get('/',(req,res) =>{
    res.send("Hello World!")
});

app.get('/hi', (req, res) => {
    res.send("hi")
});

/*app.post('/addUser', (req, res) =>{

})*/

app.listen(8889,() => {
    console.log("listening on port 8889")
});