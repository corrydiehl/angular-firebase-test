'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angularFirebaseApp
 */
 app.controller('NavCtrl', function ($scope, $mdSidenav, $mdDialog, authService) {
    $scope.toggleSideNav = function() {
    	var u = authService.user;
		$mdSidenav('sideNav').toggle();
	}
	
	$scope.closeNav = function() {
		$mdSidenav('sideNav').toggle();
	}
});