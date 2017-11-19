MyApp.controller("HomeController",
		function($scope) {
			console.log("home controller loaded successfully");
			$scope.name = "Sachin";
			this.fn = "ABCD";
			
			
			$scope.All_Data_menu=[
				{
                                    "AMM_MENU_NAME":"NODAL ACCOUNT",
                                    "submenus":['post facto','Pending Registrations','Reg Reports','Payment reports'],
                                    "submenuid":['1033','1006','1007','1008'],
                                    "AMM_MENU_ID":"1004"
                                },
                                {
                                    "AMM_MENU_NAME":"User",
                                    "submenus":['Role Mapping','Group Mapping'],
                                    "submenuid":['1011','1012'],
                                    "AMM_MENU_ID":"1029"
                                },
                                {
                                    "AMM_MENU_NAME":"Admin",
                                    "submenus":['create role','create group','create menu','role to menu mapping','unlock user'],
                                    "submenuid":['1022','1023','1024','1025','1026'],
                                    "AMM_MENU_ID":"1085"
                                }
                                
				];
                                
                          $scope.userData=[{
                                  "AMM_MENU_NAME":"NODAL ACCOUNT",
                                    "submenus":['post facto'],
                                    "submenuid":['1033'],
                                    "AMM_MENU_ID":"1004"
                          }];
			
			angular.forEach($scope.All_Data_menu,function(element){
                            element.isSelected=false;
                            element.uisubmenus=[];
                            angular.forEach($scope.userData,function(userEelement){
                                  if(element.AMM_MENU_NAME===userEelement.AMM_MENU_NAME){
                                      for(var i=0;i<element.submenus;i++){
                                          for(var j=0;j<userEelement.submenus;j++){
                                              if(element.submenus[i]==userEelement.submenus[j]){
                                                  element.uisubmenus.push({'menuname':element.submenus[i],'checked':true});
                                              }
                                              else
                                              {
                                                  element.uisubmenus.push({'menuname':element.submenus[i],'checked':false});
                                              }
                                          }
                                      }
                                  }
                            });
			});
			
			console.log("All_Data_menu:",JSON.stringify($scope.All_Data_menu));
			
		});