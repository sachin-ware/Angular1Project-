MyApp.controller("ParentController",['$scope','$location',
                function($scope,$location) {
			console.log("sidebarController loaded");
			$scope.ctrlName = "Parent Controller";
			$scope.obj={
					name:"Sachin"
			}
			
			$scope.navigate=function(url){
				console.log(url);
                               // window.location = "#"+url;
                                 $location.url(url);
			};
			this.fn = "ABCD";
		}]
		);