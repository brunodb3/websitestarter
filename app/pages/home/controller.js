// /app/pages/home/controller.js
// Home Controller
var app = angular.module('WebsiteStarter');

// Creating the Controller
app.controller('HomeCtrl',
[
	function() {
		// controller logic
		// variables
		var vm = this;

		// scope variables
		vm.message = 'Welcome to the home!';
	}
]);