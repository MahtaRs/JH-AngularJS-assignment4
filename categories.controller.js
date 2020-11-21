(function(){
    'use strict';
    angular.module("MenuApp")
    .controller("CategoriesController" , CategoriesController);
    CategoriesController.$inject = ['categories' , '$scope']
    function CategoriesController(categories){
        var cont = this;
        cont.categories = categories;
    }
})();
