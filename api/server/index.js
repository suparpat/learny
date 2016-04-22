//http://www.dancorman.com/knex-your-sql-best-friend/

var express = require('express');  
var app = express();  
var db  = require('./db');
var apiV1 = require('../routes/apiV1')
var port = 4000;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportSetup = require('./passportSetup');

db.migrate.then(function(){
	
	console.log('Done migrating database.');

	// Use application-level middleware for common functionality, including
	// logging, parsing, and session handling.
	app.use(require('morgan')('combined'));
	app.use(require('cookie-parser')());
	app.use(require('body-parser').urlencoded({ extended: true }));
	app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

	app.listen(port, function(){
		console.log("Listening on port", port);

		//Setup passport.js
		passportSetup.setup();

		// Initialize Passport and restore authentication state, if any, from the session.
		app.use(passport.initialize());
		app.use(passport.session());

		//Start API routes
		apiV1.start();
		app.use('/api/v1', apiV1.router)
	}); 

});

// To do:
// 1. Use passport.js
// 2. Catch all for route errors
// 3. Finish APIs (users, posts, comments)
// 4. Connect with Angular
// 5. Refactor API to have similar SQL commands in one file (see network/server/lib/general.js in github repo "network")