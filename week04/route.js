(function () {
  'use strict';

  angular
    .module('MenuApp')
    .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouterConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'state.home.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'state.categories.html',
        controller: 'MenuCategoriesController as ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{categoryCode}/{categoryName}',
        templateUrl: 'state.items.html',
        controller: 'MenuItemsController as ctrl',
        resolve: {
          categoryName: ['$stateParams', function ($stateParams) {
            return $stateParams.categoryName;
          }],
          items:['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryCode)
          }]
        }
      })
  }
})();
