const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require('mysql');
// Create an instance of the express app.
const app = express();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '1234',
//     database: 'bamazon'
// })

const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const readData = () => {
    /*connection.query(`select * from burgers`, (err, data) => {
        if (err) throw err
        data.burger_name
    }) */
}

app.get('/', (req, res) => {
    res.render('index', readData())
})

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });