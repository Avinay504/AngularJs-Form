
var myApp=angular.module("myModule",[])

myApp.controller("myController",function($scope){
	var employees=[
	             {name:"ben"  ,   dateofbirth:new date("november 23 1985"),     gender:"male"    ,  salary:55000.483}, 
	             {name:"sara" ,   dateofbirth:new date("january 23 1981") ,     gender:"female" ,   salary:60000}, 
	             {name:"mark" ,   dateofbirth:new date("feburary 23 1980"),     gender:"male"   ,   salary:65000}, 
	             {name:"pam"  ,   dateofbirth:new date("march 23 1982")  ,      gender:"female"  ,  salary:45000}, 
	             {name:"todd" ,   dateofbirth:new date ("july 23 1983")  ,      gender:"male"   ,   salary:35000}, 
	             ];
			     $scope.employees=employees;
			     $scope.rowlmit=3;
});