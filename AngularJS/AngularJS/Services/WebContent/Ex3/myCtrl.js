var app = angular.module('myApp', []);

/*app.config(function($httpProvider) {
	  $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});
*/

app.controller('jobController', ['JobService','$scope' , function(JobService,$scope) {
	
	var self = this;
	
	self.job = {id : '',title : '',	description : '',dateTime : '',
			qualification : '',	status : '', errorCode : '',errorMessage : ''
		};
	self.jobs=[]
	self.getAllJobs = function() {
		console.log('calling the method getAllJobs');
		JobService
				.getAllJobs()
				.then(
						function(d) {
							self.jobs = d;
						},
						function(errResponse) {
							console
									.error('Error while fetching All opend jobs');
						});
	};
	self.getAllJobs();
}]);