var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/files', express.static(__dirname + '/../node_modules'));

app.get('/', function(req, res){
	res.sendfile('index.html');
});

console.log("listening on 3000");
app.listen(3000);