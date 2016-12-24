var app = angular.module('myApp', []);
app.controller('jobController', function($scope) {
	var self = this;
	self.job={id:"", title:""}
	
	console.log("In Job Controller")
	
	self.getDetails = function getJobDetails()
	{  // function definition
		
	    self.job={id:"JD001", title:"Technical Lead"}
	
	}
     self.getDetails()  // calling the function
	
	
	
	   
});