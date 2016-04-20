var pg = require('pg');
var config = require('../config.json');
var connectionString = config.PostgreSQL.connectionString;
console.log(connectionString)
var client = new pg.Client(connectionString);

client.connect();


  client.query('CREATE TABLE posts(id SERIAL PRIMARY KEY, text VARCHAR(1000) not null, author VARCHAR(100))', function(err, result){
    if(err){
      client.end();
      return console.error('error running query', err);
    }
    
      console.log("Created table posts");
      client.end();

    

  });




// var getPostsTable = function(callback){
//   client.query('SELECT * FROM posts', function(err, result){
//     if(err){
//       client.end();
//       return console.error('error running query', err);
//     }
//     console.log("Select * FROM posts", result);
//     if(callback){
//       callback();
//     }
//   });
// }


