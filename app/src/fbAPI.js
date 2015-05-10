module.exports = {
	login:function(callback) {
		FB.login(function(response){
			callback(response)
		});
	},
	getUserInfo:function(callback) {
		FB.api(
		    'me?fields=name,picture{url}',
		    function (response) {
		        callback(response);
		    }
		);
	}

}


