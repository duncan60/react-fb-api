import appDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import fbAPI from '../fbAPI';

var fbGrahpActions = {
    getUserInfo() {
        fbAPI.getUserInfo((res) => {
            appDispatcher.handleAction({
                actionType : appConstants.FB_GIT_USER_INFO,
                data : res
            });
        })
    }
};


export default fbGrahpActions;