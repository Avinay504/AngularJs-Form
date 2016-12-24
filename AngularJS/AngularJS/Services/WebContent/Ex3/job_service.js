'use strict';
 
app.service('JobService', ['$http', '$q', function($http, $q){
	
	console.log("JobService...")
	
	var url='http://localhost:8081/CollaborationBackEnd'
		
    return {
       getAllJobs: function(){
            return $http.get(url+ '/getAllJobs/')
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                 return $q.reject(errResponse);
                            }
                    );
    }
    
    };
 
}]);