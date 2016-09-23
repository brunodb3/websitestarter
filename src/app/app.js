// app.js
// ------------------------------------------
// this is the first .js file the website will read,
// contains all the dependencies and the main angular controller
(function () {
  'use strict';

  angular.module('WebsiteStarter', [
    'ui.router',
    
    'WebsiteStarter.pages'
  ])
    .controller('MainAppCtrl', MainAppCtrl);

  /** @ngInject */
  function MainAppCtrl() {
    console.log('Main App Ctrl');
  }
})();