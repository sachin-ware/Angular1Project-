MyApp.service('sharedDataService', ['$http',function($http){
        
                var service=this;
                service.data={};
                service.getUser=getUser;
                service.setUser=setUser;
                return service;
                
                function getUser(){
                    return service.data.user;
                }
                
                function setUser(user){
                    service.data.user=angular.copy(user);
                }
                
                
        }]);