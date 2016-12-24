var app = angular.module('myApp', []);

app.controller('jobController', ['JobService', function(JobService) {
	
	var self = this;
	
	self.job = {id : '',title : '',	description : '',dateTime : '',
			qualification : '',	status : '',errorCode : '',	
			errorMessage : ''
		};
	
	self.jobs=[]
	self.getAllJobs = function() {
		console.log('calling the method getAllJobs');
		JobService
				.getAllJobs()
				.then(
						function(data) {
							self.jobs = data;
						}
						
				
				);
	};

	self.getAllJobs();
	   
}]);