import AppDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import objectAssign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let authInfo = {
	accessToken   : '',
	signedRequest : '',
	userID        : ''
};

function loginSuccess(res){
	authInfo = res ;
};

var fbLoginStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
	    this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
	    this.removeListener(CHANGE_EVENT, cb);
	},
	getAuthInfo: function() {
	    return authInfo;
	}
});

AppDispatcher.register(function(payload) {
  	var action = payload.action;
  	switch(action.actionType){
	    case appConstants.FB_LOGIN_SUCCESS:
	      	loginSuccess(action.data.authResponse);
	      	fbLoginStore.emit(CHANGE_EVENT);
	    break;
	    case appConstants.FB_LOGOUT:
	      	loginSuccess({});
	      	fbLoginStore.emit(CHANGE_EVENT);
	    break;
    default:
      	return true;
  }
});


module.exports = fbLoginStore;
