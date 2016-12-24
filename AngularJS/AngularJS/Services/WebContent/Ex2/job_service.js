app.service('JobService',  ['$http', function($http){
	var BASE_URL='http://localhost:8081/CollaborationBackEnd'
		
	var self=this
	
	self.job={id:"", title:""}
	
	self.jobs=[]
	
    self.getAllJobs = getAllJobs
    
	function getAllJobs(){
		console.log("Calling getAllJobs of JobService")
        return $http.get(BASE_URL+'/getAllJobs/')
                .then(
                        function(response){
                        	console.log("getting response")
                            return response.data;
                        }
                );
}

		   
}]);