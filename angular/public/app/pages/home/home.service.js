'use strict';

/* Services */

angular.module('learny.services.home', ['ngResource'])

	.factory('Posts', function($resource){
		return $resource("http://localhost:3010/post");
	})
