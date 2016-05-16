angular.module('app').factory('ProductsFactory', function($resource) {
    
    return $resource('http://smartninja.betoo.si/api/eshop/products/:id');
    
    var basket = [];
    
    return {
        addArticle: addArticle,
        basket: basket
    }
    
    function addArticle(id) {
        basket.push(id);
        return basket;
    }
});
