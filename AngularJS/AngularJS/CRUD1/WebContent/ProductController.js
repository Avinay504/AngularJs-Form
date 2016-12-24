
var helloApp = angular.module("shoppingCartApp", []);

helloApp.controller("ProductCtrl", function($scope) {
$scope.products = [
                    { 'name':'iPhone',
                      'category': 'Mobile',
                      'price': 50000},
                    { 'name':'Dell',
                      'category': 'Laptop',
                      'price': 40000},
                    { 'name':'Nike',
                      'category': 'Shoe',
                      'price': 2000},
                	{ 'name':'Godrej refrigerator',
                      'category': 'Electronics',
                      'price': 2000}
                    	
                    ];
$scope.addRow = function(name,category,price){		
	$scope.products.push({ 'name':$scope.name, 'category': $scope.category, 'price':$scope.price });
	$scope.name='';
	$scope.category='';
	$scope.price='';
};
$scope.removeRow = function(name){				
		var index = -1;		
		var productList = eval( $scope.products );
		for( var i = 0; i < productList.length; i++ ) {
			if( productList[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.products.splice( index, 1 );		
	};
});

			
			