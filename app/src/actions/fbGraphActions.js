import appDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import fbAPI from '../fbAPI';

let fbGrahpActions = {
    getUserInfo() {
        fbAPI.getUserInfo((res) => {
        	console.log('res',res);
            appDispatcher.handleAction({
                actionType : appConstants.FB_GIT_USER_INFO,
                data : res
            });
        })
    }
};


export default fbGrahpActions;