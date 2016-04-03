"use strict";

var PostController = {},
	Moment = require("moment"),
	TagController = require("./tag.js"),
	Collections = require("../data/collection.js");

PostController.getAll = function (req, res) {
	Collections.PostCollection.forge()
	.fetch()
	.then(function (result) {
		res.status(200).json(result);
	})
	.catch(function (err) {
		res.status(500).json(err);
	});
};

PostController.getPost = function (req, res) {
	getPostWithId(req.params.id)
	.then(function (post) {
		if (!post) {
			res.status(404).json({message: "post not found"});
		} else {
			res.status(200).json(post);
		}
	})
	.catch(function (err) {
		res.status(500).json({message: err.message});
	});
};

PostController.create = function (req, res) {
	var tags = getArrayOfTags(req, ["uncategories"]);

	// Save post
	Collections.PostCollection.forge()
	.create({
		user_id: req.body.user_id,
		category_id: req.body.category_id,
		title: req.body.title,
		html: req.body.content,
		created_at: Moment().format()
	})
	.then(function (post) {
		// save tags
		TagController.create(tags)
		.then(function (ids) {
			post.tag().attach(ids);
			res.status(200).json(post);
		})
		.catch(function (err) {
			res.status(500).json({message: err.message});
		});
	})
	.catch(function (err) {
		res.status(500).json({message: err.message});
	});
};

var getArrayOfTags = function (req, defaultCategory) {
	var tags = req.body.tags;

	if (tags) {
		tags = tags.split(", ").map(function (tag) {
			return tag.trim();
		});
	} else {
		tags = defaultCategory;
	}

	return tags;
};

PostController.update = function (req, res) {
	var tags = getArrayOfTags(req, []);

	getPostWithId(req.params.id)
	.then(function (post) {
		if (!post) {
			res.status(404).json({message: "post not found"});
		} else {
			post.save({
				user_id: req.body.user_id || post.get("id"),
				category_id: req.body.category_id || post.get("category_id"),
				title: req.body.title || post.get("title"),
				html: req.body.content || post.get("html"),
				updated_at: Moment().format()
			})
			.then(function (result) {
				if (tags.length > 0) {
					TagController.create(tags)
					.then(function (ids) {
						// Save only newly added tags
						ids = result.toJSON().tag.filter(function (tag) {
							return ids.indexOf(tag.id) < 0;
						});

						result.tag().attach(ids);
						res.status(200).json("post updated");
					})
					.catch(function (err) {
						res.status(500).json({message: err.message});
					});
				} else {
					res.status(200).json(result);
				}
			})
			.catch(function (err) {
				res.status(500).json({message: err.message});
			});
		}
	})
	.catch(function (err) {
		res.status(500).json({message: err.message});
	})
};

PostController.destroy = function (req, res) {
	getPostWithId(req.params.id)
	.then(function (post) {
		if (!post) {
			res.status(404).json({error:"Post not found", message: err.message});
		} else {
			var tagIds = post.toJSON().tag.map(function (tag) {
				return tag.id;
			});

			// Delete many-to-many relations first
			post.tag().detach(tagIds);

			// Then delete the model itself
			post.destroy()
			.then(function () {
				res.status(200).json({});
			})
			.catch(function (err) {
				res.status(500).json({error:"Post delete failed", message: err.message})
			});
		}
	})
	.catch(function (err) {
		res.status(500).json({message: err.message})
	});
};

var getPostWithId = function (id) {
	// To get back the tags in alphabatical order
	var tagRelation = function (qb) {
		qb.orderBy("name");
	};

	return Collections.PostCollection.forge()
	.query(function (qb) {
		qb.where("id", "=", id);
	})
	.fetchOne({
		withRelated: ["category", {"tag" : tagRelation}]
	});
}

module.exports = PostController;














