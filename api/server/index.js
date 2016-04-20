//http://www.dancorman.com/knex-your-sql-best-friend/

var express = require('express');  
var app = express();  
var db  = require('./db');
var apiV1 = require('../routes/apiV1')
var port = 4000;


db.migrate.then(function(){
	
	console.log('Done migrating database.');

	app.listen(port, function(){
		console.log("Listening on port", port);
		apiV1.start(db.knex);
		app.use('/api/v1', apiV1.router)
	}); 

});

// To do:
// 1. Use passport.js
// 2. Catch all for route errors
// 3. Finish APIs (users, posts, comments)
// 4. Connect with Angular
// 5. Refactor API to have similar SQL commands in one file (see network/server/lib/general.js in github repo "network")