app.service('DummyJobService', function() {
	var self=this
	
	self.job={id:"", title:""}
	
	self.jobs=[]
	
	self.getAllDummyJobs = getAllDummyJobs

	function getAllDummyJobs()
	{
		console.log("Getting dummy jobs")
	     self.jobs=
	    [ 
	      {id:"JD001", title:"Technical Lead"},
	      {id:"JD002", title:"Technical Architect"},
	      {id:"JD003", title:"Technical Manager"},
	      ]
		
		return self.jobs
	}
		   
});