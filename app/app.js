// /app/app.js
// Entry JS file for AngularJS
var app = angular.module('WebsiteStarter', ['ui.router']);

// Creating the Main App Controller
app.controller('AppCtrl',
['$scope',
    function($scope) {
        // controller logic
        // variables
        var vm = this;

        // scope variables
        vm.bodyClass = 'default';

        // logic
        // changing the body class according to the state (route)
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            // checks if the state has a class name to change to
            if(angular.isDefined(toState.data.bodyClass)){
                vm.bodyClass = toState.data.bodyClass;
                return;
            }

            // reverts bodyClass to default if the state has no class name
            vm.bodyClass = 'default';
        });
    }
]);

// Config Provider
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    	// fallback for when no route is found
        $urlRouterProvider.otherwise('/');

	    // enables html5 mode (no # on the url)
	    $locationProvider.html5Mode(true);

        // states or routes
        $stateProvider
	        // home
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as ctrl',
                templateUrl: 'pages/home/template.html',
                data: {
                    bodyClass: 'home'
                }
            });

    }]);