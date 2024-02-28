const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

connection.connect((err) => {
    if (!err) {
        console.log("Connected to MySQL database");
    } else {
        console.error("Error connecting to database:", err);
    }
});

module.exports = connection;
