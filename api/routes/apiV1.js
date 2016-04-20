var express = require('express');
var router = express.Router();
var passport = require('passport');

module.exports = { start: function(knex){

	router.use(function middleMan(req, res, next){
		console.log('--> Detected a '+req.method+" to "+req.url);
		next();
	});

	router.get('/', express.static('static/html/apiV1'));

	router.get('/users', function(req, res){
		knex.select('*').from('users').then(function(rows){
			res.json({ 'success': true, 'rows':rows });
		})

	});

	router.get('/user/:id', function(req, res){
		knex.select('*').from('users').then(function(rows){
			res.json({ 'success': true, 'id': req.params.id, 'rows':rows });
		})
	});

	router.post('/user', function(req, res){
		var mockUser = {
			username: 'blablabla',
			password: 'myPassword',
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


	router.get('/posts', function(req, res){
		res.json({ 'success': true });
	});

	router.get('/posts/:id', function(req, res){
		knex.select('*').from('posts').then(function(rows){
			res.json({ 'success': true,'id': req.params.id, 'rows':rows });
		})
	});

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

