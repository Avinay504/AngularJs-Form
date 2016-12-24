
var shoppingCartApp = angular.module("shoppingCartApp", []);

shoppingCartApp.controller("ProductCtrl", function($scope) {
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
$scope.addRow = function(){		
	$scope.products.push({ 'name':$scope.u_name, 'category': $scope.u_category, 'price':$scope.u_price});
	$scope.u_name="";
	$scope.u_category='';
	$scope.u_price='';
};

$scope.updateRow = function(name){
	var index = -1;
	$scope.u_name="";
	$scope.u_category="";
	$scope.u_price="";
	
	var list = eval($scope.products);
	for(var i =0 ;i<list.length;i++)
		{
		if(list[i].name==name)
			{
			$scope.u_name=list[i].name;
			$scope.u_category=list[i].category;
			$scope.u_price = list[i].price;
			break;
			}
	
		}
	
	$scope.removeRow(name)
};



$scope.removeRow = function(name){		
	console.log("removing the product" + name)
		var index =-1	
		var productList = eval( $scope.products );
		for( var i = 0; i < productList.length; i++ ) {
			if( productList[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index == -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.products.splice( index, 1 );		
	};
});

			
			