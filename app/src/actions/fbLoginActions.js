import appDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import fbAPI from '../fbAPI';

var fbLoginActions = {
	login:function() {
		fbAPI.login(function(res){
			if (res.status === 'connected'){
				appDispatcher.handleAction({
					actionType : appConstants.FB_LOGIN_SUCCESS,
					data : res
				});
			} else {
				//dispatcher error
			}
		})
	},
	logout:function() {
		
	}
};


module.exports = fbLoginActions;