'use strict';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBR8Q3WuskTxejLaI3_MU1VtUddHCC5ZUU",
  authDomain: "fileuploadtest-44836.firebaseapp.com",
  databaseURL: "https://fileuploadtest-44836.firebaseio.com",
  storageBucket: "fileuploadtest-44836.appspot.com",
  messagingSenderId: "1038127555153"
};
firebase.initializeApp(config);

/**
 * @ngdoc overview
 * @name angularFirebaseApp
 * @description
 * # angularFirebaseApp
 *
 * Main module of the application.
 */
 
var app = angular
  .module('angularFirebaseApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMap'
  ])
  .config(function($mdThemingProvider) {
    //$mdThemingProvider.theme('default').light();
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
