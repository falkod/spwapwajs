(function () {

'use strict';

angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', controller);

  controller.$inject = ['$scope'];

  function controller($scope) {
    // init var
    $scope.menuList = "";
    $scope.approvalMessage = "";
    $scope.approvalColor = "";

    $scope.checkMenu = function () {
      // set the approval message; empty values are bypassed
      $scope.approvalMessage =
        $scope.menuList == "" ? "Please enter data first" :
          $scope.menuList.split(",").filter(i => i.trim().length > 0).length <= 3 ? "Enjoy!" : "Too much!";

      // define the color component color
      $scope.approvalColor = $scope.menuList == "" ? "red" : "green";
    };
  }

})();
