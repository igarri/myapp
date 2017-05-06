var express = require('express')
var open = require('open')

var app = express()
app.use(express.static(__dirname))


app.use('/', function (req, res) {
  res.sendFile(__dirname + "/main.html")
})

app.listen(8000, function () {
  console.log('App listening on port 8000')
  open('http://localhost:8000')
})
