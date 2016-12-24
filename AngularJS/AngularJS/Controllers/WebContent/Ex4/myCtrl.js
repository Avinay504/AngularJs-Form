var app = angular.module('myApp', []);


app.controller('jobController', function($scope) {
     
	//this.job={id:"", title:""} //JSON Object

	
	this.jobs=[]  //JSON Array

	this.getAllJobs = function getAllJobsDetails()
	{
		console.log("getAllJobs")
	    this.jobs=
	    [ 
	      {id:"JD001", title:"Technical Lead"},
	      {id:"JD002", title:"Technical Architect"},
	      {id:"JD003", title:"Technical Manager"}
	      ]
	}
	this.getAllJobs()  /// calling the method
	   
});