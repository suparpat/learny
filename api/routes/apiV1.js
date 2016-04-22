var express = require('express');
var router = express.Router();
var passport = require('passport');
var knex = require('../server/db').knex;
var bcrypt = require('bcrypt');

module.exports = { start: function(){

	router.use(function middleMan(req, res, next){
		// console.log('--> Detected a '+req.method+" to "+req.url);
		next();
	});

	router.get('/', express.static('static/html/apiV1'));

	//Login
	router.post('/login', passport.authenticate('local'),
		function(req, res){
		res.redirect('/')
	});

	//Logout
	router.get('/logout',
		function(req, res){
			req.logout();
			res.redirect('/');
		})


	//Get all users
	router.get('/users',
		function(req, res){
		knex.select('*').from('users').then(function(rows){
			res.json({ 'success': true, 'rows':rows });
		})

	});

	//Get a user
	router.get('/user/:id',
		function(req, res){
		knex.select('*').from('users').then(function(rows){
			res.json({ 'success': true, 'id': req.params.id, 'rows':rows });
		})
	});

	//Create a user
	router.post('/user',
		function(req, res){
			var salt = bcrypt.genSaltSync(12);
			// var hash = Bcrypt.hashSync(req.body.password, salt);

		var mockUser = {
			username: 'blablabla',
			password: bcrypt.hashSync('myPassword', salt),
			name: 'myName',
			email: 'fdfd@fdsfd.com',
			// created_at: Date.now()
		};

		knex.table('users').insert(mockUser)
		.catch(function(error){
			console.error(error)
		})
		.then(function(result){
			res.json({ 'success': true, 'result': result});
		});

	  // var results = [];

	  // var data = {content: req.body.content, author: req.body.author};

	  // pg.connect(connectionString, function(err, client, done){
	  //   catchError(err, done, req, res);

	  //   client.query("INSERT INTO posts(content, author) values($1, $2)", [data.content, data.author], function(err, result){
	  //     done();
	  //     catchError(err, done, req, res);
	  //     return res.status(201).json({success: true});
	  //   });
	  // })

	})

	//Get all posts
	router.get('/posts', function(req, res){
		res.json({ 'success': true });
	});

	//Get a post
	router.get('/posts/:id', function(req, res){
		knex.select('*').from('posts').then(function(rows){
			res.json({ 'success': true,'id': req.params.id, 'rows':rows });
		})
	});

	//Create a post
	router.post('/posts', function(req, res){
		res.json({ 'success': true });

	  // var results = [];

	  // var data = {content: req.body.content, author: req.body.author};

	  // pg.connect(connectionString, function(err, client, done){
	  //   catchError(err, done, req, res);

	  //   client.query("INSERT INTO posts(content, author) values($1, $2)", [data.content, data.author], function(err, result){
	  //     done();
	  //     catchError(err, done, req, res);
	  //     return res.status(201).json({success: true});
	  //   });
	  // })

	})



	function catchError(err, done, req, res){
	  if(err){
	    done();
	    console.log('Routing error: '+err);
	    return res.status(500).json({success: false, data: err});
	  }
	}


}, router: router};

