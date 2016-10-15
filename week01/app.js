(function () {

'use strict';

angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', controller);

  controller.$inject = ['$scope'];

  function controller($scope) {

    $scope.menuList = "";
    $scope.approvalMessage = "";
    $scope.approvalColor = "black";

    // empty values are bypassed
    $scope.checkMenu = function () {
      $scope.approvalMessage =
        $scope.menuList == "" ? "Please enter data first" :
          $scope.menuList.split(",").filter(i => i.trim().length > 0).length <= 3 ? "Enjoy!" : "Too much!";
      $scope.approvalColor = $scope.menuList == "" ? "red" : "green";
    };
  }

})();
