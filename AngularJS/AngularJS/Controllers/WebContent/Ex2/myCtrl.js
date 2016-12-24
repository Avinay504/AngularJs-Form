var app = angular.module('myApp', []);
//2
app.controller('jobController', function($scope) {
	
	$scope.job=
	{ 
			id:"JD001",
			title:'Technical  "Lead"  ',
			qualification: 'BE/BTech',
			salary : '10K   to 50K'
	}
	   
});

