//angular.module('app').controller('ProductsController', function($scope, locker, ProductsFactory){
angular.module('app').controller('ProductsController', function($scope, ProductsFactory){
    $scope.factory = ProductsFactory;
 
    $scope.addArticle = function(id) {
        $scope.basket = factory.addArticle(id);
    }
    

});