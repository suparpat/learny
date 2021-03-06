'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('learny.services', ['ngResource'])

	.value('version', '0.1')

	.factory('Users', function($resource){
		return $resource("http://localhost:3010/users");
	})

	.factory('Posts', function($resource){
		return $resource("/post");
	})
