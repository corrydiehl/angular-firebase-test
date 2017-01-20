'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angularFirebaseApp
 */
 app.controller('NavCtrl', function ($scope, $mdSidenav, $mdDialog) {
    $scope.toggleSideNav = function() {
		$mdSidenav('sideNav').toggle();
	}
	
	$scope.closeNav = function() {
		$mdSidenav('sideNav').toggle();
	}
});