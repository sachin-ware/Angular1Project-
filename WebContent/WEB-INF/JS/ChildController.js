MyApp.controller("ChildController",
		function($scope) 
		{
			console.log("home controller loaded successfully");
			$scope.ctrlName = "ChildController";
			;
			$scope.sayHello=function(){
				$scope.obj.name="Keshav"
			};		
});