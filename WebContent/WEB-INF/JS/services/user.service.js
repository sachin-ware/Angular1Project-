MyApp.service('userService', ['$http',function($http){
            var service = this;
            service.saveUser=saveUser;
           
            service.url="http://localhost:8082/"
            return service;
            
            function saveUser(data) {
                // console.log("Saving:",JSON.stringify(data));
                 return $http.post(service.url+'user', data).then(handleSuccess, handleError('Error while saving user. '));

             }
            
            
            function handleSuccess(res) {
//                var deferred = $q.defer();
//                if(res.data.errorCode) {
//                       console.log(res.data.errorCode+' - '+res.data.errorMessage);
//                       deferred.reject(res.data);
//                } else {
//                       deferred.resolve(res.data);
//                }
//                return deferred.promise;
                return res;
            } 

            function handleError(error) { 
//                return $q.reject(error); 
                return error;
            } 
    }]);