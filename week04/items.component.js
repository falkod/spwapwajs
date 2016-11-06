(function () {
  'use strict';
  angular
    .module('MenuApp')
    .component('items', {
      templateUrl:'tpl.items.html',
      bindings: {
        items: '<'
      }
    });
})();
