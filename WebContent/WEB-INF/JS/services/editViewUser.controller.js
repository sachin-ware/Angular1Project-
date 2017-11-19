MyApp.controller("EditViewUserController",['$scope','$http','$location','userService','sharedDataService',
    function($scope,$http,$location,userService,sharedDataService) {
                        $scope.user={};
                        
                        
                        $scope.initcontroller=function(){
                            $scope.user=sharedDataService.getUser();  
                        };
                        $scope.initcontroller();
                        function handleSuccess(res) {
                             $scope.userData=res.data;
                           //  console.log(JSON.stringify($scope.userData));
                        } 

                        function handleError(error) { 
                          console.log(error);
                        } 
                        
                       
                        $scope.navigateToCreateUser=function(){
                            $location.url('/user/add');
                        };
                        
                        $scope.saveUser=function(){
                            console.log(JSON.stringify($scope.user));
                            userService.saveUser($scope.user);
                        };
                        $scope.clearData=function(){
                            $scope.user={};
                        };
                        
                        $scope.editUser=function(usr){
                            $scope.view=true;
                            $scope.user=angular.copy(usr);
                            $location.url('/user/edit');
                        };
                        
                        $scope.viewUser=function(usr){
                            $scope.user=usr;
                            $scope.view=true;
                            $location.url('/user/view');
                        };
                        
                        $scope.deleteUser=function(usr){
//                            $scope.view=true;
//                            $scope.user=usr;
//                            $location.url('/user/delete');
                        };
		}]);
		