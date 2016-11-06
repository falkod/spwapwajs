(function () {
  'use strict';
  angular
    .module('MenuApp')
    .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['categoryName', 'items'];
  function MenuItemsController(categoryName, items) {
    this.categoryName = categoryName;
    this.items = items;
  }
})();
