(function(){
  "use strict";
  angular.module("data")
  .controller('CategoriesController' , CategoriesController);
  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories){
    var con = this;
    con.categories = categories;
  }
})();
