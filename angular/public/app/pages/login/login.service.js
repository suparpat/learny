'use strict';

/* Services */

angular.module('learny.services.login', ['ngResource'])

	.factory('Users', function($resource){
		return $resource("http://localhost:3010/users");
	})
