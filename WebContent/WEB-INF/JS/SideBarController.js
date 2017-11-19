MyApp.controller("sidebarController",['$scope','$location',
                function($scope,$location) {
			//console.log("sidebarController loaded");
			$scope.ctrlName = "sidebarController";
			$scope.obj={
					name:"Sachin"
			}
                        
                        $scope.checkClick=function(){
                            console.log("check clicked");
                        }
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
                                        "submenus":['post facto','Reg Reports'],
                                        "submenuid":['1033','1007'],
                                        "AMM_MENU_ID":"1004"
                              }];
                          
                          
			$scope.navigate=function(url){
				console.log(url);
                               // window.location = "#"+url;
                                 $location.url(url);
			};
			this.fn = "ABCD";
                        
                        test();
                        $scope.oldmenus=angular.copy($scope.userData);
                        $scope.newMenus=[];
                              
                        $scope.Menu_Dtls_Checkbox=function (sub,headerMenu,hasChecked){
                            if(hasChecked){   
                                $scope.newMenus.push({"headerMenuId":headerMenu,submenu:sub});
                            }
                            else{
                                for(var i=0;i<$scope.newMenus.length;i++){
                                    if($scope.newMenus[i].submenu.menuname===sub.menuname)
                                    {
                                        $scope.newMenus.splice(i,1);
                                    }
                                }
                            }
                             console.log("clicked:",JSON.stringify($scope.newMenus));
                        };
                        
                        $scope.uncheckedMenus=[];
                        $scope.submit=function(){
                            console.log("oldmenus:",JSON.stringify($scope.oldmenus));
                            console.log("newMenus:",JSON.stringify($scope.newMenus));
                            var flag=false;
                            angular.forEach($scope.newMenus,function(element){
                               angualr.forEach($scope.oldmenus,function(oldHdrMenu){
                                  if(oldHdrMenu.AMM_MENU_ID===element.headerMenuId) {
                                      var spliceIndex=null;
                                      for(var i=0;i<oldHdrMenu.submenus.length;i++){
                                          if(oldHdrMenu.submenus[i]==element.submenu.menuname){
                                              flag=true;
                                              spliceIndex=i;
                                          }
                                      }
                                      if(flag){
                                          oldHdrMenu.submenus.splice(spliceIndex,1);
                                      }
                                  }
                               }); 
                            });
                            console.log("oldmenus after:",JSON.stringify($scope.oldmenus));
                        };
                        
                        function test(){
                               

                              
                              
                            angular.forEach($scope.All_Data_menu,function(element){
                                element.isSelected=false;
                                element.uisubmenus=[];
                                for(var i=0;i<element.submenus.length;i++){
                                    element.uisubmenus.push({'menuname':element.submenus[i],'checked':false});
                                }
                                angular.forEach($scope.userData,function(userEelement){
                                    
                                      if(element.AMM_MENU_NAME===userEelement.AMM_MENU_NAME){
                                          element.isSelected=true;
                                          for(var i=0;i<element.submenus.length;i++){
                                              for(var j=0;j<userEelement.submenus.length;j++){
                                                  if(element.submenus[i]==userEelement.submenus[j]){
                                                      element.uisubmenus[i]={'menuname':element.submenus[i],'checked':true};
                                                  }
//                                                  else
//                                                  {
//                                                      element.uisubmenus.push({'menuname':element.submenus[i],'checked':false});
//                                                  }
                                              }
                                          }
                                      }
//                                      else{
//                                          for(var i=0;i<element.submenus.length;i++){
//                                             element.uisubmenus.push({'menuname':element.submenus[i],'checked':false});
//                                          }
//                                      }
                                });
                            });

                            console.log("All_Data_menu:",JSON.stringify($scope.All_Data_menu));
                        }
                        
                        
		}]
		);