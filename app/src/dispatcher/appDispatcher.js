'use strict';

import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'API_ACTION',
            action: action
        });
    }
}

let _AppDispatcher = new AppDispatcher();

export default _AppDispatcher;