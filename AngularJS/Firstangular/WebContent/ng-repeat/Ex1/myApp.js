
var myApp=angular
                 .module("myModule",[])
                 .controller("myController",function($scope){
                	 var employees=[
                	               
                	               {firstname:"avinay",lastname:"singh",gender:"male",salary:50000},
                	               {firstname:"rajiv",lastname:"shekhar",gender:"male",salary:50000},
                	               {firstname:"sudama",lastname:"verma",gender:"female",salary:50000},
                	               {firstname:"shankar",lastname:"kartik",gender:"male",salary:50000},
                	               {firstname:"hina",lastname:"pandey",gender:"female",salary:50000},
                	              ];
                			 $scope.employees=employees;
                	 
	         
});