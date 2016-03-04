// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'noteContentFactory', "noteContentFactory", "angular-toArrayFilter"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'our-list-app/www/templates/menu.html',
    controller: 'AppCtrl'
  })


    .state('app.noteList', {
      url: '/noteList',
      views: {
        'menuContent': {
          templateUrl: 'our-list-app/www/templates/noteList.html',
          controller: 'noteListCtrl',
          reload: true
        }
      }
    })
    .state('app.deleteNotes', {
      url: '/deleteNotes',
      views: {
        'menuContent': {
          templateUrl: 'our-list-app/www/templates/deleteNotes.html',
          controller: 'noteListCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/note/:noteListid',
    views: {
      'menuContent': {
        templateUrl: 'our-list-app/www/templates/note.html'
        //controller: 'noteCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/noteList');
});
