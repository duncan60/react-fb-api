module.exports = {
    login: (callback) => {
        FB.login((response) => {
            console.log('response',response);
            callback(response);
        },{
            scope: 'user_friends,email,user_likes',
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
            'me?fields=name,picture{url},friends',
            (response) => {
                callback(response);
            }
        );
    },
    getFriends: (callback) => {
        FB.api(
            'me/taggable_friends',
            (response) => {
                callback(response);
            }
        );
    }

}


