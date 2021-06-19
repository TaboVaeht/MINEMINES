const path = require("path")
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get("/ejemplo", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"))
  res.sendFile(path.resolve(__dirname, "facha.css"))
})
app.get("/alann", function (req, res) {
  res.send("alann es gay")
})

app.listen(3939);


app.use(express.static("facha.css"));