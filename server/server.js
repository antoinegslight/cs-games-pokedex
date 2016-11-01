var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end('Pokedex');
});

app.listen(5678);
console.log("Listening on port 5678");
