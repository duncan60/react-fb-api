module.exports = {
	login: (callback) => {
		FB.login((response) => {
			callback(response);
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


