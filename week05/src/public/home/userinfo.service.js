(function () {
  'use strict';

  angular
    .module('public')
    .service('UserInfoService', UserInfoService);

  function UserInfoService() {
    var service = this;

    service.setUser = function(user) {
      service.user = user;
    }

    service.getUser = function() {
      return service.user;
    }
  }
})();
