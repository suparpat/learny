var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = require('./config.json');
var connectionString = config.PostgreSQL.connectionString;

router.post('/api/v1/post', function(req,res){
  var results = [];

  var data = {content: req.body.content, author: req.body.author};

  pg.connect(connectionString, function(err, client, done){
    catchError(err, done, req, res);

    client.query("INSERT INTO posts(content, author) values($1, $2)", [data.content, data.author], function(err, result){
      done();
      catchError(err, done, req, res);
      return res.status(201).json({success: true});
    });
  })

})

router.get('/api/v1/post', function(req,res){

})

function catchError(err, done, req, res){
  if(err){
    done();
    console.log(err);
    return res.status(500).json({success: false, data: err});
  }
}
