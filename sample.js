(function(){
  "use strict";
  angular.module("myapp" , [])
  .controller("ToBuyController" , ToBuyController)
  .controller("AlreadyBoughtController" , AlreadyBoughtController)
  .service('ShoppingListCheckOffService' , ShoppingListCheckOffService);
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var ItemAdd = this;
    ItemAdd.to_buy_array = ShoppingListCheckOffService.getItems();
    ItemAdd.buyitem = function(index){
      ShoppingListCheckOffService.buyItem(index);
  };

  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    var ItemShow = this;
    ItemShow.bought_items = ShoppingListCheckOffService.ShowBoughtItems();

  }
  function ShoppingListCheckOffService (){
    var service = this;
    var to_buy = [
      {
        name: "cookies", quantity: 10
      },
      {
        name: "oreos", quantity: 8
      },
      {
        name: "marshmello", quantity: 5
      },
      {
        name: "icecreames", quantity: 3
      },
      {
        name: "milkbottles", quantity: 12
      }
    ];
    var bought_items = [];
    service.ShowBoughtItems = function (){
      return bought_items;
    }
    service.getItems = function (){
      return to_buy;
    };
    service.buyItem = function (index){
      bought_items.push(to_buy[index]);
      to_buy.splice(index, 1);
    };
  }
})();
