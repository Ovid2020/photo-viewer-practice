var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/files', express.static(__dirname + '/../node_modules'));

var Pic = require('../database/models/Pic');
var db = require('../database/config');



// ========= TEMPORARY: SET UP DUMMY DATA IN DATABASE ON FIRST INITIALIZATION OF SERVER =============

// var newPic1 = new Pic( 		 
// 	{title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1}
// );

// var newPic2 = new Pic(
// 	{title: 'pic2', url: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg', rating: 3}
// );

// var newPic3 = new Pic(
// 	{title: 'pic3', url: 'https://catlovers2015.files.wordpress.com/2015/05/90725-colorful-kittens.jpg', rating: 5}
// );


// newPic1.save();
// newPic2.save();
// newPic3.save();




// ========== HANDLE REQUESTS ======================

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/pics', function(req, res){
	Pic.find({}).exec(function(err, pics){
		if (err) {
			console.log('Error in database request: ', err);
		} else {
			res.status(200).send({results: pics});
		}
	});
})

console.log("Listening on port 3000");
app.listen(3000);

