var express = require('express');
var app = express();
var nodemailer = require('nodemailer');



// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: "MYGMAIL@gmail.com",
//         pass: "MYGMAILPASS"
//     }
// });


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

app.get('/send',function(req,res){
    var mailOptions={
        to : "lepeter125@gmail.com",
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});
// route middleware
router.use(function(req, res, next) {
	//log each request to console
	console.log(req.method, req.url);
	//contine doing what we were doing and go to route
	next();

});










app.use('/', router);

app.listen(1338);
console.log('1338 server is working');




