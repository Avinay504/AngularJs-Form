var app=angular
               .module("myModule",[])
               .controller("myController",function($scope){
            	   var countries=[
            	                  {
            	                	  name:"UK",
            	                	  cities:[
            	                	          {name:"london"},
            	                	          {name:"lords"},
            	                	          {name:"thames"}
            	                	          ]
            	                  
            	                  },
            	                  {
            	                	  name:"india",
            	                	  cities:[
            	                	          {name:"delhi"},
            	                	          {name:"mumbai"},
            	                	          {name:"chennai"}
            	                	          ]
            	                  
            	                  },
            	                  {
            	                	  name:"Australia",
            	                	  cities:[
            	                	          {name:"sydney"},
            	                	          {name:"brisban"},
            	                	          {name:"malburone"}
            	                	          ]
            	                  
            	                  },
            	                  
            	                  ];
            			   
            	   $scope.countries=countries;
               });