var app = angular.module("app", ['ui.router', 'ngRoute']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('home', {
    url: '/our-list/home',
    views: {
      '': {
        templateUrl: 'our-list-app/partials/home.html',
        controller: 'home'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/our-list/home');

});
