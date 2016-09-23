// pages.module.js
// ------------------------------------------
// this file contains the main router configuration from angular
(function () {
  'use strict';

  angular.module('WebsiteStarter.pages', [
    'ui.router',

    // here we pull each page as a separate module
    'WebsiteStarter.pages.home'
  ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $locationProvider) {
    // redirect if no route was found
    $urlRouterProvider.otherwise('/home');

    // enables html5 mode (no # on the url)
    $locationProvider.html5Mode(true);
  }

})();
