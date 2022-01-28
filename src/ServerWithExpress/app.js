const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const mysql = require("../Mappers/mysql") // import mysql.js file in Mapper package

// indicates body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// reply simply "good" to get
router.get('/',(req, res) => {
    res.send("good");
});

// signup functionality, call the addUser function in mysql.js.
router.post("/signup",(req, res) => {
    let user_name = req.body.username;
    let password = req.body.password;
    //console.log("User name = " + user_name + ", password = " + password);
    mysql.addUser(res, user_name, password) // note the pass the response to mysql.js, to let it do the rest
});

router.post("/login",(req, res) => {
    let user_name = req.body.username;
    let password = req.body.password;
    console.log("User name = " + user_name + ", password = " + password);
    mysql.checkUser(res, user_name, password) // note the pass the response to mysql.js, to let it do the rest
});

// bind app with router
app.use("/", router);
// start listening
app.listen(3000,() => {
    console.log("Started on PORT 3000");
})

