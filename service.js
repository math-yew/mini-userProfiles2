angular.module('userProfiles').service('mainService', function($http) {
  this.getUsers = function() {
		var page = 3;
    return $http({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=' + page
    });
  }
});
