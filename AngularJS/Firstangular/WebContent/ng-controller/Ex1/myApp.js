
var myApp=angular.module("myModule",[]);

myApp.controller("myController",function($scope){
	var employee={
			firstname:"avinay",
			lastname:"singh",
			gender:"male"
	};
	$scope.employee=employee;
});