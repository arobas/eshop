angular.module('app').config(function($stateProvider, $urlRouterProvider){
    
   $urlRouterProvider.otherwise('/error');
    
   $stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Homepage</h1>'
	}); 
    
    $stateProvider.state('categories',
	{
		url: '/categories',
		templateUrl: 'templates/categories.html',
        controller: function($scope, CategoryFactory) {
            $scope.categories = CategoryFactory.query({});
        }
	}); 
    
    $stateProvider.state('articles',
	{
		url: '/articles',
		template: '<h1>Izdelki</h1>'
	}); 
    
        $stateProvider.state('description',
	{
		url: '/description',
		template: '<h1>Opis izdelka</h1>'
	}); 
    
        $stateProvider.state('basket',
	{
		url: '/basket',
		template: '<h1>Košarica</h1>'
	}); 
    
        $stateProvider.state('userinfo',
	{
		url: '/userinfo',
		template: '<h1>Uporabnik</h1>'
	}); 
        $stateProvider.state('about',
	{
		url: '/about',
		template: '<h1>O nas</h1>'
	}); 
        $stateProvider.state('privacy',
	{
		url: '/privacy',
		template: '<h1>Politika zasebnosti</h1>'
	}); 
});
