module.exports = {
    login: (callback) => {
        FB.login((response) => {
            callback(response);
        },{
            scope: 'user_friends,email',
            return_scopes: true
        });
    },
    logout: (callback) => {
        FB.logout((response) => {
            callback(response);
        });
    },
    getUserInfo: (callback) => {
        FB.api(
            'me?fields=name,picture{url}',
            (response) => {
                callback(response);
            }
        );
    }

}


