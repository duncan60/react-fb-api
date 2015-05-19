import AppDispatcher from '../dispatcher/appDispatcher';
import AppConstants from '../constants/appConstants';
import Immutable from 'immutable';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let userInfo = {
    uid      : '',
    name     : '',
    picture  : ''
};

class UserStore extends EventEmitter {
    constructor() {
        super();
        let _this = this;
        _this._userInfo = Immutable.Map(userInfo);
    }
    getUserInfo() {
        return this._userInfo.toObject();
    }
    setUserInfo(respone){
        let res = {
            uid     : respone.id,
            name    : respone.name,
            picture : respone.picture.data.url
        };
        let isIdentical = Immutable.is(this._userInfo, Immutable.Map(res));
        if (!isIdentical) {
            this._userInfo  = Immutable.Map(res);
            //console.log('_this._userInfo ',this._userInfo);
            //console.log('>>',this._userInfo.get('picture.data.url'));
            // var _todos = Immutable.OrderedMap();
            // var TodoRecord = Immutable.Record({
            //     id : null,
            //     complete : false,
            //     text : 'A brand new thing to do!'
            //   });
            // _todos = _todos.set(99, new TodoRecord({id : 99, text : 'test test'}));
            // console.log(_todos);
            // console.log('_todos.get(id)',_todos.get(99));
            // console.log('_todos.toObject()',_todos.toObject());
            // var todos =_todos.toObject();
            // for (var key in todos) {
            //    console.log(todos[key]);
            //    var todo = todos[key];
            //    console.log('text',todo.text);
            // }
            //console.log(this._userInfo.getIn(['picture','data','url']));
            // var b = Immutable.fromJS(res).toObject();
            // console.log('b',b);
            // var picture = Immutable.fromJS(b.picture).toObject();
            // console.log('picture',picture);
            // var pictureData = Immutable.fromJS(picture).toObject();
            // console.log('pictureData',pictureData);
            //var url = pictureData.get('url');
           // console.log('url',url);
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
