(function(){
  "use strict";
  angular.module("data")
  .service('MenuDataService' , MenuDataService);
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;
    service.getAllCategories = function(){
      return $http({
        method: "GET",
        url: (ApiBasePath + "categories.json")}
      ).then(function (result) {
          return result;
      });
    }
    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json?category=" + categoryShortName)}
      ).then(function (result) {
          return result;
      });
    }
  }
})();
