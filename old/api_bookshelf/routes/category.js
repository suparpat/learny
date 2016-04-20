"use strict";

var CategoryController = {},
	Collections = require("../data/collection.js");

CategoryController.getAll = function (req, res) {
	Collections.CategoryCollection.forge()
	.fetch()
	.then(function (result) {
		res.status(200).json(result);
	})
	.catch(function (err) {
		res.status(500).json(err);
	});
};

CategoryController.create = function (req, res) {
	Collections.CategoryCollection.forge()
	.create({
		name: req.body.name
	})
	.then(function (result) {
		res.status(200).json(result);
	})
	.catch(function (err) {
		res.status(500).json(err);
	});
};

CategoryController.getCategory = function (req, res) {
	Collections.CategoryCollection.forge()
	.query(function (qb) {
		qb.where("id", "=", req.params.id);
	})
	.fetchOne()
	.then(function (category) {
		if (!category) {
			res.status(404).json({});
		} else {
			res.status(200).json(category);
		}
	})
	.catch(function (err) {
		res.status(500).json(err);
	});

};

CategoryController.update = function (req, res) {
	Collections.CategoryCollection.forge()
	.query(function (qb) {
		qb.where("id", "=", req.params.id);
	})
	.fetchOne({
		require: true
	})
	.then(function (category) {
		category.save({
			name: req.body.name || category.get("name")
		})
		.then(function (result) {
			res.status(200).json(result);
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
	})
	.catch(function (err) {
		res.status(500).json(err);
	});
};

CategoryController.destroy = function (req, res) {
	Collections.CategoryCollection.forge()
	.query(function (qb) {
		qb.where("id", "=", req.params.id);
	})
	.fetchOne({
		require: true
	})
	.then(function (category) {
		category.destroy()
		.then(function () {
			res.status(200).json({});
		})
		.catch(function (err) {
			res.status(500).json(err);
		});
	})
	.catch(function (err) {
		res.status(500).json(err);
	});
};

module.exports = CategoryController;
