import appDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import fbAPI from '../fbAPI';

var fbLoginActions = {
    login() {
        fbAPI.login((res) => {
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
    logout() {
        fbAPI.logout((res) => {
            appDispatcher.handleAction({
                actionType : appConstants.FB_LOGOUT,
                data : res
            });
        })
    }
};


export default fbLoginActions;