(function () {
  'use strict';

  angular
    .module('MenuApp')
    .component('categories', {
      templateUrl:'tpl.categories.html',
      bindings: {
        categories: '<'
      }
    });
})();
