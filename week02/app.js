(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
      $scope.toBuyArr = ShoppingListCheckOffService.toBuyArr;
      $scope.buy = function(index) {
        ShoppingListCheckOffService.buyItem(index);
      }

    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        $scope.boughtArr = ShoppingListCheckOffService.boughtArr;
    }

    function ShoppingListCheckOffService() {
      var service = this;
      var createItem = function (name, qty) {
        return {
          name: name,
          qty: qty
        };
      }

      service.toBuyArr = [];
      service.boughtArr = [];

      service.toBuyArr.push(createItem("Cookies", 10));
      service.toBuyArr.push(createItem("Milk", 1));
      service.toBuyArr.push(createItem("Chocolate", 2));
      service.toBuyArr.push(createItem("Orange juice", 2));
      service.toBuyArr.push(createItem("Apple fruit", 5));
      service.toBuyArr.push(createItem("Tea", 3));

      service.buyItem = function(itemIndex) {
        service.boughtArr.push(service.toBuyArr[itemIndex]);
        service.toBuyArr.splice(itemIndex,1);
      }
    }

})();
