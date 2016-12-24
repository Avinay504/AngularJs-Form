(function() {
/* global angular */


app.controller('SidebarController', function($scope) {
    
    $scope.state = false;
    
    $scope.toggleJobState = function() {
        $scope.state = !$scope.state;
    };
    
    $scope.toggleChatState = function() {
        $scope.state = !$scope.state;
    };
    
    $scope.toggleBlogState = function() {
        $scope.state = !$scope.state;
    };
    
});

app.directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };
});
    
}());