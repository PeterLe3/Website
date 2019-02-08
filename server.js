var express = require('express');
var app = express();






// make the css files public
 //app.use(express.static('public'));

app.use(express.static(__dirname + "/public"));
  app.use('/public', express.static(__dirname + '/public'));
var router = express.Router();

 

// sends index.html file to homepage 
app.get('/', function(req, res) {
	//use double quotes because single quotes dont work
	res.sendFile(path.join(__dirname + "/public/index.html"));

});
// route middleware
router.use(function(req, res, next) {
	//log each request to console
	console.log(req.method, req.url);
	//contine doing what we were doing and go to route
	next();

});










app.use('/', router);

app.listen(1337);
console.log('1337 server is working');




