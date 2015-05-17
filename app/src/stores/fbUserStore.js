import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants';
import Immutable from 'immutable';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let userInfo = {
	uid      : '',
	name     : '',
	picture  : {}
};

class UserStore extends EventEmitter {
	constructor() {
        super();
        let _this = this;
        _this._userInfo = Immutable.fromJS({});
    }
	getUserInfo() {
	    return this._userInfo;
	}
	setUserInfo(res){
    	let isIdentical = Immutable.is(this._userInfo, Immutable.fromJS(res));
        if (!isIdentical) {
            this._userInfo = Immutable.fromJS(res);
        }
    }
    emitChange(type) {
    	this.emit(CHANGE_EVENT,type);
    }
	addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	}
};

let _UserStore = new UserStore();

_UserStore.dispatchToken = AppDispatcher.register((payload) => {
  	let action = payload.action,
  		type   = '';

  	switch(action.actionType){
	    case AppConstants.FB_GIT_USER_INFO:
	      	_UserStore.setUserInfo(action.data);
	      	type = 'getUserInfo';
	    break;
    default:
      	return true;
  	}
  	_UserStore.emitChange(type);
  	return true;
});


export default _UserStore;
