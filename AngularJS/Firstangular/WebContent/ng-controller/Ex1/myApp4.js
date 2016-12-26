var myApp=angular
                  .module("myModule",[])
                  .controller("myController",function($scope){
                	  var employee={
                			  firstname:"Avinay",
                			  lastname:"singh",
                	          gender:"male"
                	  };
                	  $scope.employee=employee;
                  });
