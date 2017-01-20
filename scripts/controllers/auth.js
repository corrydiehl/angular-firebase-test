'use strict';

/**
 * @ngdoc function
 * @name angularFirebaseApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the angularFirebaseApp
 */
app.controller('AuthCtrl', function($rootScope, $scope, $q, authService) {

    $scope.user = authService.getUser();

    $scope.openMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }

    $scope.logInWithProvider = function(providerName) {
        authService.logInWithProvider(providerName);
    }

    $scope.logOut = function() {
        authService.logOut();
    }

    $scope.$on('handleAuth', function(event, user) {
        $rootScope.$apply(function() {
            $scope.user = user;
        });
    });
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $scope.user = user;
            $rootScope.$broadcast('handleAuth', user);
        }
        else {
            $scope.user = null;
        }
    });

});
