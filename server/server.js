var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/files', express.static(__dirname + '/../node_modules'));

var dummyData = [
 		 {title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1},
		 {title: 'pic2', url: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg', rating: 3}
		 ];


app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/pics', function(req, res){
	res.send({results: dummyData});
})

console.log("Listening on port 3000");
app.listen(3000);