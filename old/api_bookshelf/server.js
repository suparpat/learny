//http://dnyy.sg/a-postgresql-backend-service-on-node-js-with-express-and-bookshelf-js/
//https://github.com/boxme/Node-Bookself-PostgreSql-Demo

var Express = require("express");
var App = Express();
var Http = require("http");
var BodyParser = require("body-parser");
var Router = Express.Router();
var MethodOverride = require("method-override");
var Multer = require("multer");
var Db = require("./database.js");
var AuthController = require("./routes/auth.js");
var UserController = require("./routes/user.js");
var CategoryController = require("./routes/category.js");
var PostController = require("./routes/post.js");
var TagController = require("./routes/tag.js");

var angularUrl = "http://localhost:3000";
// App.use(Multer());
App.use(MethodOverride());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended: true}));


//http://enable-cors.org/server_expressjs.html
App.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", angularUrl);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Db.initialisation(function(){
	Http.createServer(App).listen(3010, function(){
		console.log('API server running on port 3010')
	});	
});



App.get("/users", UserController.getAll);
App.get("/users/:id", AuthController.requireUser(), UserController.getUser);
App.post("/users", UserController.create);
App.post("/users/login", UserController.login);
App.post("/users/logout", AuthController.requireUser(), UserController.logout);
App.put("/users/:id", AuthController.requireUser(), UserController.update);
App.delete("/users/:id",AuthController.requireUser(), UserController.destroy);

App.get("/categories", CategoryController.getAll);
App.get("/categories/:id", CategoryController.getCategory);
App.post("/categories", AuthController.requireUser(), CategoryController.create);
App.put("/categories/:id", AuthController.requireUser(), CategoryController.update);
App.delete("/categories/:id", AuthController.requireUser(), CategoryController.destroy);

App.get("/post", PostController.getAll);
App.get("/post/:id", AuthController.requireUser(), PostController.getPost);
App.post("/post", AuthController.requireUser(), PostController.create);
App.put("/post/:id", AuthController.requireUser(), PostController.update);
App.delete("/post/:id", AuthController.requireUser(), PostController.destroy);

App.get("/tag", TagController.get);
// App.post("/tag", TagController.create);