MyApp.controller("sidebarController",['$scope','$location',
                function($scope,$location) {
			//console.log("sidebarController loaded");
			$scope.ctrlName = "sidebarController";
			$scope.obj1={
					name:"Sachin",
                                        age:26,
                                        Gender:"Male",
                                        hobies:["Cricket","Byking","Movies"],
                                        innerObject:{
                                            innerName:"inner Sachin"
                                        }
			};
			
			console.log("Test Log");
                        
                        $scope.obj2={
					name:"Sachin",
                                        age:26,
                                        Gender:"Male",
                                        hobies:["Cricket","Byking","Movies"],
                                         innerObject:{
                                            innerName:"inner Sachin"
                                        }
			};
                        $scope.obj3=$scope.obj2;
                        
                        $scope.checkClick=function(){
                            console.log("check clicked");
                            //alert(""+angular.element(".btn-primary").text());
                            alert("angular.equals(obj1,obj2)"+(angular.equals($scope.obj1,$scope.obj2)));
                            alert("$scope.obj1==$scope.obj2"+($scope.obj1==$scope.obj2));
                            //alert("$scope.obj1==$scope.obj2"+($scope.obj3==$scope.obj2));
                        };
                        
}]);