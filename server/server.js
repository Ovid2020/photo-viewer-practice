var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/files', express.static(__dirname + '/../node_modules'));

var Pic = require('../database/models/Pic');



// ========= TEMPORARY: SET UP DUMMY DATA IN DATABASE =============
// var dummyData = [
//  		 {title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1},
// 		 {title: 'pic2', url: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg', rating: 3}
// 		];
 
var newPic1 = new Pic( 		 
	{title: 'pic1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t1DVsLltecgdcENQX927x8yQCgjLbj-QmPzff-T8Jtr7CNjasw', rating: 1}
);

var newPic2 = new Pic(
	{title: 'pic2', url: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg', rating: 3}
);

newPic1.save();
newPic2.save();

console.log("pic1", newPic1); 

Pic.find({}).exec(function(err, pics){
	console.log("	pics are: ", pics);
})


// ========== HANDLE REQUESTS ======================

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/pics', function(req, res){
	//res.send({results: dummyData});
	Pic.find({}).exec(function(err, pics){
		console.log("req received")
		if (err) {
			console.log('Error in database request: ', err);
		} else {
			console.log("RESULTS ARE: ", pics);
			res.status(200).send({results: pics});
		}
	});
})

app.post('/pics', function(req, res){
	// var body = req.body;
	// Enter body into DB // i.e., dummyData.push(body);
	// res.statusCode(200);
	// res.send();
});



console.log("Listening on port 3000");
app.listen(3000);

