'use strict';

/* Services */

angular.module('learny.services.create', ['ngResource','ngQuill'])

	.factory('Posts', function($resource){
		return $resource("http://localhost:3010/post");
	})
