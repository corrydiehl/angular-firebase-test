'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the angularFirebaseApp
 */
 app.controller('AuthCtrl', function ($rootScope, $scope, authService) {

	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	}

    $scope.logInWithProvider = function(providerName) {
        authService.logInWithProvider(providerName);
    }
});