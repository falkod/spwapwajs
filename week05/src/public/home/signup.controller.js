(function () {
  'user strict';

  angular
    .module('public')
    .controller('SignupController', SignupController)

  SignupController.$inject = ['$scope', 'MenuService', 'UserInfoService'];
  function SignupController($scope, MenuService, UserInfoService) {
    var ctrl = this;

    ctrl.user = {
      firstname: 'qsdfqsdf',
      lastname: 'qsdfqsdf',
      email: 'qsdf@qsdf.com',
      phone: '123 1234 1234',
      favoriteMenu: {}
    };

    ctrl.saved = false;
    ctrl.submit = function() {
      console.log(ctrl.user.favoriteMenu.short_name);
      MenuService.getItem(ctrl.user.favoriteMenu.short_name)
      .then(function (item) {
        if (item.status === undefined) {
          $scope.signupForm.favoriteMenu.$setValidity("validMenu", true);
          ctrl.user.favoriteMenu = item;
          $scope.signupForm.favoriteMenu.$setValidity("validMenu", true);
          if ($scope.signupForm.$valid) {
            UserInfoService.setUser(ctrl.user);
            ctrl.saved = true;
          }
        }
        else {
          $scope.signupForm.favoriteMenu.$setValidity("validMenu", false);
        }

      })
      .catch(function (error) {
        $scope.signupForm.favoriteMenu.$setValidity("validMenu", false);
      });
    };
  }

})();
