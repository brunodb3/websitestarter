// home.module.js
// ------------------------------------------
// this file contains the home router configuration
(function () {
  'use strict';

  angular.module('WebsiteStarter.pages.home', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    // $stateProvider defines the route (or state)
    $stateProvider
      .state('home', {
        url: '/home',
        title: 'Home',
        controller: 'HomeCtrl',
        templateUrl: 'app/pages/home/home.html'
      });
  }

})();
