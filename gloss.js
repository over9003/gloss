const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", function(request, response) {
  response.sendFile(`${__dirname}/index.html`)
})

app.post("/", function(request, response) {
  var userName = request.body.name;
  response.send(`Your name is: <h1 style="color: red;">\
    ${userName.toUpperCase()}</h1> and you are fabulous`)
})

app.listen(80, function(request, response) {
  console.log("Server este valoare");
})
