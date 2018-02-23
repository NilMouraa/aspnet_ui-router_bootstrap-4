var app = angular
    .module('myapp', [
        'ui.router'
    ]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/Home');

    $stateProvider
        .state('home', {
            url: '/Home',
            templateUrl: 'Home/Index',
            controller: 'HomeCtrl'
        })
        .state('about', {
            url: '/About',
            templateUrl: 'About/Index',
            controller: 'AboutCtrl'
        })
        .state('contact', {
            url: '/Contact',
            templateUrl: 'Contact/Index',
            controller: 'ContactCtrl'
        });

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode(true);
});
