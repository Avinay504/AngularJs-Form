
app.controller('SidebarController', function($scope) {
    
    $scope.state = false;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});


