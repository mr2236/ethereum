var express = require('express');
var app = express();

app.use(express.static(__dirname));
console.log(express.static(__dirname));

app.listen('3300');
console.log('working on 3300');