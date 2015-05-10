import AppDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import objectAssign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let userInfo = {
	uid      : '',
	name     : '',
	picture  : {}
};

function setUserInfo(res){
	userInfo = res ;
};

var fbUserStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
	    this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
	    this.removeListener(CHANGE_EVENT, cb);
	},
	getUserInfo: function() {
	    return userInfo;
	}
});

AppDispatcher.register(function(payload) {
  	var action = payload.action;
  	switch(action.actionType){
	    case appConstants.FB_GIT_USER_INFO:
	      	setUserInfo(action.data);
	      	fbUserStore.emit(CHANGE_EVENT);
	    break;
    default:
      	return true;
  }
});


module.exports = fbUserStore;
