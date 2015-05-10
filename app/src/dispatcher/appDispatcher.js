var Dispatcher = require('flux').Dispatcher;
var appDispatcher = new Dispatcher();

appDispatcher.handleAction = function(action){
  	this.dispatch({
    	source: 'VIEW_ACTION',
    	action: action
  	});
};


module.exports = appDispatcher;