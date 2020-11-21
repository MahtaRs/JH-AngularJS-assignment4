(function(){
  'use strict';
  angular.module("MenuApp")
  .controller("ItemsController" , ItemsController);
  ItemsController.$inject = ['items' , '$scope'];
  function ItemsController(items , $scope){
    var cont = this;
    cont.items = items;
    console.log(items);
  }
})();
