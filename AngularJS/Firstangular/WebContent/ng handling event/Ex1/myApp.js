        var app = angular
                 .module('myModule', [])
                 .controller("myController",function ($scope){
                	 var technologies=[                	                   
                                         {name:"C#",likes:"0",dislikes:"0"},
                                         {name:"C",likes:"0",dislikes:"0"},
                                         {name:"java",likes:"0",dislikes:"0"},
                                         {name:"python",likes:"0",dislikes:"0"},
                                         {name:"angularjs",likes:"0",dislikes:"0"}
                	                   
                	                   ];
                	 $scope.technologies=technologies;
                	 
                	 $scope.incrementlikes=function (technology){
                		 technology.likes++;
                	 }
                	 $scope.decrementlikes=function (technology){
                		 technology.dislikes++;
                	 }
                 });