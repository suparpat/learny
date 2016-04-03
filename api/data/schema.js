//http://dnyy.sg/a-postgresql-backend-service-on-node-js-with-express-and-bookshelf-js/

var Schema = {

	users:{
		id: { type: "increments", nullable: false, primary: true },
		email: { type: "string", maxlength: 254, nullable: false, unique: true },
		name: { type: "string", maxlength: 150, nullable: false },
		password: { type: "string", nullable: false },
		token: { type: "string", nullable: true }
	},

	categories:{
		id: { type: "increments", nullable: false, primary: true },
		name: { type: "string", maxlength: 150, nullable: false, unique: true }
	},

	posts:{
		id: { type:"increments", nullable: false, primary: true },
		user_id: { type:"integer", nullable: false, unsigned: true },
		category_id: { type:"integer", nullable: false, unsigned: true },
		title: { type:"string", maxlength:150, nullable: false },
		html: { type:"string", maxlength:5000, nullable: false },
		created_at: { type:"dateTime", nullable: false },
		updated_at: { type:"dateTime", nullable: true }
	},

	tags:{
		id:{ type:"increments", nullable: false, primary: true },
		name:{ type:"string", nullable:false, unique:true }
	},

	// A table for many-to-many relation between tags table & posts table
	posts_tags:{
		id:{ type:"increments", nullable: false, primary: true },
		post_id:{ type:"integer", nullable:false, unsigned: true, references:"posts.id" },
		tag_id:{ type:"integer", nullalbe:false, unsigned: true, references:"tags.id" }
	}
}

module.exports = Schema;