	
console.log("FIle loaded");
var MyApp = angular.module("TestApp", ['ngRoute'])
//        .config(['$routeProvider',function ($routeProvider) {
//                $routeProvider.when('/user', {
//                    templateUrl: 'HTML/User.html',
//                    controller: 'HomeController',
//                });
//        }] );



.config(['$routeProvider','$httpProvider',function ($routeProvider,$httpProvider) {
                $routeProvider.when('/user', {
                  //  template:'<Strong>This is user html.</Strong>',
          
                    templateUrl:'HTML/UserList.html',
                    controller: 'UserController'
                });
                
                $routeProvider.when('/user/add', {
                  //  template:'<Strong>This is user html.</Strong>',
          
                    templateUrl:'HTML/User.html',
                    controller: 'UserController'
                });
                
                $routeProvider.when('/user/edit', {
                  //  template:'<Strong>This is user html.</Strong>',
          
                    templateUrl:'HTML/User.html',
                    controller: 'EditViewUserController'
                });
                
                $routeProvider.when('/user/view', {
                  //  template:'<Strong>This is user html.</Strong>',
          
                    templateUrl:'HTML/priyanka.html',
                    controller: 'sidebarController'
                });
                
                $routeProvider.otherwise({
                    redirectTo: '/user'
                });
                
                $httpProvider.interceptors.push("httpInterceptorServie");
        }] );