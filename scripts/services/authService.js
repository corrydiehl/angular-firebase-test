app.factory('authService', function($mdDialog) {
    var provider, user;

    var logInWithProvider = function(providerName) {
        switch(providerName) {
            case 'google':
                provider = new firebase.auth.GoogleAuthProvider();
                break;
            case 'facebook':
                provider = new firebase.auth.FacebookAuthProvider()
                break;
            case 'twitter':
                provider = new firebase.auth.TwitterAuthProvider();
                break;
            case 'github':
                provider = new firebase.auth.GithubAuthProvider();
                break;
        }

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google access token. You can use it to access the Google API
            var token = result.credential.accessToken;
            // The signed-in user info
            var user = result.user;
        }).catch(function(error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used
            var credential = error.credential;

            if (errorCode == 'auth/popup-closed-by-user')
                return;

            $mdDialog.show(
                $mdDialog.alert()
                    .targetEvent(originatorEv)
                    .clickOutsideToClose(true)
                    .parent('body')
                    .title('Error Authenticating')
                    .textContent('Error Code: ' + errorCode + '<br />' + errorMessage)
                    .ok('Close')
            );

            originatorEv = null;
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.user = result.user;
            } else {
                this.user = null;
            }
        });
    };

    var logOut = function() {
        firebase.auth().signOut().then(function() {
            // Sign out successfully
        }, function(error) {
            // An error happened
        });
    };

    return {
        logInWithProvider: logInWithProvider,
        logOut: logOut,
        user: user
    };
});