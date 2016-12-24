var app = angular.module('myApp', []);


app.controller('jobController', ['DummyJobService','$scope' , function(DummyJobService,$scope) {
	
	var self = this;
	
	self.job={id:"", title:""}
	
	self.jobs=[]
	

	
	self.getAllJobs = function getAllJobs()
	{
		console.log("getAllJobs")
		self.jobs = DummyJobService.getAllDummyJobs()
		console.log("Dummy jobs:"+self.jobs)
		
	}

	self.getAllJobs()
	   
}]);