(function() {
"use strict";
angular.module('data')
.controller('CategoriesController' , CategoriesController)
.component('categories', {
  templateUrl: 'categories.component.html',
  controller: 'CategoriesController',
  controllerAs:'catCon',
  resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    },
  bindings:{
    cats:'<'
  }
});
})();
