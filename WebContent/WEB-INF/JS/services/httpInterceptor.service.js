
    MyApp.service('httpInterceptorServie', [function(){
            var service = this;
            
            service.request=function(config){
                console.log("Request interceptor executed. Config:",config);
                return config;
            };
            service.requestError=function(reqError){
                console.log("requestError interceptor executed.reqError:",reqError);
                return reqError;
            };

            service.response=function(res){
                console.log("Response interceptor executed. res:",JSON.stringify(res));
                return res;

            };
            service.responseError=function(resError){
                console.log("responseError interceptor executed. resError:",resError);
                return resError;
            };
            
            return service;
            
    }]);

//MyApp.factory('httpInterceptorServie', ['$log', function($log) {  
//    //$log.debug('$log is here to show you that this is a regular factory with injection');
//
//    var httpInterceptorServie = {
//        request:function(config){
//                console.log("Request interceptor executed",config);
//                return config;
//            },
//        requestError:function(reqError){
//                console.log("requestError interceptor executed",reqError);
//                return reqError;
//            },
//
//        response:function(res){
//                console.log("Response interceptor executed",res);
//                return res;
//
//            },
//        responseError:function(resError){
//                console.log("responseError interceptor executed",resError);
//                return resError;
//            }
//    };
//
//    return httpInterceptorServie;
//}]);