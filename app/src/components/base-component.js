import React from 'react/addons';

class BaseComponent extends React.Component {
    // shouldComponentUpdate() {
    //     return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    // }
    _bind(...methods) {
        methods.forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }
}

export default BaseComponent;