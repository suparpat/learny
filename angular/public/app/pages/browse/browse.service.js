'use strict';

/* Services */

angular.module('learny.services.browse', ['ngResource'])

	.factory('Posts', function($resource){
		return $resource("http://localhost:3010/post");
	})
