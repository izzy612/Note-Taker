var express = require("express");
var connection = require('./db/connection');
var path = require("path");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "class",
  database: "noted_db"
});





var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./html/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./html/notes.html"));
});

app.get("/api/notes", function (req, res) {
  connection.query("SELECT * FROM tables", function (err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data)
    
  });
});

app.post("/api/notes", function (req, res) {
  connection.query("INSERT INTO tables SET ?",
    req.txt, function (err, res) {
      if (err) {
        return res.json(err);
      }
      else {
        console.log(res);
      }
    
    });
});

app.delete("/api/notes/:id", function (req, res) {
  connection.query("DELETE FROM tables where id = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
})