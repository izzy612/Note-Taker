var express = require("express");
var connection = require('./db/connection');
var path = require("path");


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

app.get("./api/notes", function (req, res) {
  connection.query("SELECT * FROM tables", function (err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data)
    
  });
});

app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT);
})