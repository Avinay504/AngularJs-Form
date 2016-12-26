
var myApp=angular.module("myModule",[])

myApp.controller("myController",function($scope){
	var employees=[
	             {name:"ben"  ,   Dateofbirth:new Date("november 23 1985"),     gender:"male"    ,  salary:55000.483}, 
	             {name:"sara" ,   Dateofbirth:new Date("january 23 1981") ,     gender:"female" ,   salary:60000}, 
	             {name:"mark" ,   Dateofbirth:new Date("feburary 23 1980"),     gender:"male"   ,   salary:65000}, 
	             {name:"pam"  ,   Dateofbirth:new Date("march 23 1982")  ,      gender:"female"  ,  salary:45000}, 
	             {name:"todd" ,   Dateofbirth:new Date ("july 23 1983")  ,      gender:"male"   ,   salary:35000}, 
	             ];
			     $scope.employees=employees;
			     $scope.sortColumn="name";
});