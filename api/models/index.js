var moment = require("moment");	
var config = require("../config.json").PostgreSQL;

var Knex = require("knex")({
	client: "pg",
	connection: {
		host: config.host,
		user: config.user,
		password: config.password,
		database: config.database
	}
});


var Bookshelf = require("bookshelf")(Knex);
Bookshelf.plugin("visibility");
 
var User = Bookshelf.Model.extend({
	tableName: "users",
	post: function() {
		// one-to-many
		this.hasMany(Post, "post_id");
	}
});
exports.User = User;
 
var Category = Bookshelf.Model.extend({
	tableName: "categories",
	post: function() {
		// one-to-many
		this.hasMany(Post, "post_id");
	}
});
exports.Category = Category;
 
var Post = Bookshelf.Model.extend({
	tableName: "posts",
	category: function() {
		// one-to-one or many-to-one
		return this.belongsTo(Category, "category_id");
	},
	tag: function() {
		// many-to-many
		// 1st param: ClassName of related table
		// 2nd param: Name of related table
		// Other params: Foreign Keys
		return this.belongsToMany(Tag, "posts_tags", "post_id");
	},
	author: function() {
		// Bookshelf assumes that table names are plurals 
		// and that the foreignkey is the singular name of the related table fixed with _id
		return this.belongsTo(User, "user_id");
	}
});
exports.Post = Post;
 
var Tag = Bookshelf.Model.extend({
	tableName: "tags",
	post: function() {
		return this.belongsToMany(Post, "posts_tags", "tag_id");
	}
});
exports.Tag = Tag;
 
exports.Bookshelf = Bookshelf;