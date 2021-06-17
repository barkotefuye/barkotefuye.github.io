const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Helen12064303721"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  con.query
  con.end();// you've got to close connection as well