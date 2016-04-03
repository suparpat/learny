//http://dnyy.sg/a-postgresql-backend-service-on-node-js-with-express-and-bookshelf-js/

var Express = require("express");
var App = Express();
var Http = require("http");
var BodyParser = require("body-parser");
var Router = Express.Router();
var MethodOverride = require("method-override");
var Multer = require("multer");
var Db = require("./database.js");

// App.use(Multer());
App.use(MethodOverride());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended: true}));

Db.initialisation();

Http.createServer(App).listen(3010, function(){
	console.log('API server running on port 3010')
});

