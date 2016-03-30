var express = require('express');
var app = express();


app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.listen(3000, function(){
	console.log('Learny has started on port 3000!')
});