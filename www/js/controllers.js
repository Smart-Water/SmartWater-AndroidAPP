angular.module('app.controllers', ['ionic'])
  
.controller('loginCtrl', function($scope, $http, $ionicPopup, $state)  {
	$scope.user = {};

	$scope.loginFunction = function() {
		$http.get('http://smart-water.tk/api/user/'+$scope.user.cpf+'/'+$scope.user.password).success(function(data) {
		  if(data == 'false') {
			var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
		  } else {
			$scope.user = data;
			window.localStorage['userCPF'] =  $scope.user.cpf;
			if($scope.user.access_level == 2) {
				$state.go('menu.dashboard');
			}
		  }
		});
	};
})
      
.controller('dashboardCtrl', function($scope) {

})
   
.controller('userInfoCtrl', function($scope) {

})
   
.controller('dailyReportCtrl', function($scope) {

})
   
.controller('monthlyReportCtrl', function($scope) {

})
 