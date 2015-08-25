
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var rubikApp = angular.module('rubikApp', [
  'ionic','rubikApp.controllers']);

rubikApp.run(function($ionicPlatform) {
  $ionicPlatform
  .registerBackButtonAction(function () {
     
        navigator.app.exitApp();
      
    }, 100);
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})

rubikApp.config(function($stateProvider, $urlRouterProvider) {
    

  $stateProvider
            .state('init', {
                url: '/init',
                templateUrl: 'templates/init.html',
                controller: 'InitCtrl'
            })
            .state('solver', {
                url: '/solver',
                templateUrl: 'templates/solver.html',
                controller: 'SolverCtrl'
            })
            .state('showsolve', {
                url: '/showsolve',
                templateUrl: 'templates/showsolve.html',
                controller: 'ShowSolveCtrl'
            })
            .state('detector', {
                url: '/detector',
                templateUrl: 'templates/detector.html',
                controller: 'DetectorCtrl'
      
            })
            .state('showtutor', {
                url: '/showtutor',
                templateUrl: 'templates/showtutor.html',
                controller: 'ShowTutorCtrl'
      
            })
            .state('tutor', {
                url: "/tutor",
                templateUrl: "templates/tutor.html",
                controller: 'TutorCtrl'
       
            })
            .state('reset', {
                url: '/reset',
                templateUrl: 'templates/reset.html',
                controller: 'ResetCtrl'
      
            });
        $urlRouterProvider.otherwise('/init');
    });