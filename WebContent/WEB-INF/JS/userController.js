MyApp.controller("UserController",['$scope','$http','$location','userService','sharedDataService',
    function($scope,$h,$location,userService,sharedDataService) {
			console.log("UserController  loaded successfully");
                        url="http://localhost:8082/users"
			$h.get(url).then(handleSuccess, handleError('Error getting menu entry.'));
                        
                        $scope.userData={};
                        $scope.user={};
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
                            $scope.view=false;
                            sharedDataService.setUser(usr);
                            $location.url('/user/edit');
                        };
                        
                        $scope.viewUser=function(usr){
                            $scope.view=true;
                            sharedDataService.setUser(usr);
                            $location.url('/user/view');
                        };
                        
                        $scope.deleteUser=function(usr){
//                            $scope.view=true;
//                            $scope.user=usr;
//                            $location.url('/user/delete');
                        };
		}]);
		