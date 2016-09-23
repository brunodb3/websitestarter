// home.controller.js
// ------------------------------------------
// this file contains the controller for the home page
(function () {
  'use strict';

  angular.module('WebsiteStarter.pages.home')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl() {
    // controller logic
    console.log('Home Ctrl');
  }
})();