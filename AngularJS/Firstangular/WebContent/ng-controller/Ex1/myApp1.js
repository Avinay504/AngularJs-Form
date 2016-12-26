var myApp=angular
                  .module("myModule",[])
                  .controller("myController",function($scpoe){
                	  var employee={
                				firstname:"avinay",
                				lastname:"singh",
                				gender:"male"
                		};
                	  $scope.employee=employee;
                  });
