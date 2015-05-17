import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';
import Immutable from 'immutable';

const CHANGE_EVENT = 'change';

let auth = {
	status:'',
	authResponse:{
		accessToken   : '',
		signedRequest : '',
		userID        : ''
	}

};

class LoginStore extends EventEmitter {
	constructor() {
        super();
        let _this = this;
        _this._auth = Immutable.fromJS({});
    }
    getAuth() {
    	return this._auth;
    }
    setAuth(res){
    	let isIdentical = Immutable.is(this._auth, Immutable.fromJS(res));
        if (!isIdentical) {
            this._auth = Immutable.fromJS(res);
        }
    }
    emitChange() {
    	this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	}

}

let _LoginStore = new LoginStore();

_LoginStore.dispatchToken = AppDispatcher.register((payload) => {
  	var action = payload.action;
  	switch(action.actionType){
	    case AppConstants.FB_LOGIN_SUCCESS:
	      	_LoginStore.setAuth(action.data);
	      	//connected
	    break;
	    case AppConstants.FB_LOGOUT:
	      	_LoginStore.setAuth(action.data);
	      	//unknown
	    break;
    default:
      	return true;
 	}
 	_LoginStore.emitChange();
 	return true;
});


export default _LoginStore;;
