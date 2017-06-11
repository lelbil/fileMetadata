var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('file'), function(req, res) {
	res.json({"filename": req.file.originalname, "size": req.file.size});
});

app.listen(process.env.PORT || 8080, function(){
	console.log("app is running..");
});
