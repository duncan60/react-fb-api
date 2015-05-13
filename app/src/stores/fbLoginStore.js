import AppDispatcher from '../dispatcher/appDispatcher';
import appConstants from '../constants/appConstants';
import objectAssign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let info = {
	status:'',
	auth:{
		accessToken   : '',
		signedRequest : '',
		userID        : ''
	}

};

function setInfo(res){
	console.log(res);
	info.status = res.status;
	info.auth = res.authResponse ;
};

var fbLoginStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb) {
	    this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener: function(cb) {
	    this.removeListener(CHANGE_EVENT, cb);
	},
	getStatus: function(){
		return info.status;
	},
	getAuth: function() {
	    return info.auth;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	}
});

AppDispatcher.register(function(payload) {
  	var action = payload.action;
  	switch(action.actionType){
	    case appConstants.FB_LOGIN_SUCCESS:
	      	setInfo(action.data);
	      	fbLoginStore.emitChange();
	      	//connected
	    break;
	    case appConstants.FB_LOGOUT:
	      	ssetInfo(action.data);
	      	fbLoginStore.emitChange();
	      	//unknown
	    break;
    default:
      	return true;
  }
});


module.exports = fbLoginStore;
