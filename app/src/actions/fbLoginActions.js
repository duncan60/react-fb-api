import appDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import fbAPI from '../fbAPI';

let fbLoginActions = {
    login() {
        fbAPI.login((res) => {
            console.log('res',res);
            if (res.authResponse){
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