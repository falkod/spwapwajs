(function() {
  'user strict';

  angular
  .module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('BASE_REST_URL', 'http://davids-restaurant.herokuapp.com/')
  .directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;


  ctrl.search = function () {
    if (ctrl.searchCriteria == undefined || ctrl.searchCriteria.trim() == "") {
      ctrl.found = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchCriteria);
    promise
    .then(function (result) {
      ctrl.found = result;
    })
    .catch(function (result) {
      console.log("error: " + result);
    });
  }

  ctrl.remove = function(index) {
    ctrl.found.splice(index,1);
  }
}

MenuSearchService.$inject = ['$http', 'BASE_REST_URL']
function MenuSearchService($http, BASE_REST_URL) {
  var service = this;

  service.getMatchedMenuItems = function(searchCriteria) {
    var promise = $http({
      method: 'GET',
      url: BASE_REST_URL + 'menu_items.json'
    })
    .then(function (result) {
      var foundList = [];
      for (var i = 0; i < result.data.menu_items.length; i++) {
        var item = result.data.menu_items[i];
        if (item.description.indexOf(searchCriteria) !== -1) {
          foundList.push(item);
        }
      }
      return foundList;
    });

    return promise;
  }
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: ('listItem.html'),
    controller: FoundItemsDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      itemList: '<list',
      removeItem: '&onRemove'
    }
  }
  return ddo;
}

function FoundItemsDirectiveController() {
  this.checkMessage = function() {
    return this.itemList != undefined && this.itemList.length == 0;
  }
}

})();
