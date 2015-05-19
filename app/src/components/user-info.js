import React from 'react';
import BaseCompoent from '../components/base-component';

class UserInfo extends BaseCompoent {
    constructor(props) {
        super(props);
        this._bind(
            '_renderUserInfo',
            '_login',
            '_logout'
        );
    }
    _login() {
        this.props.onLoginHandler();
    }
    _logout() {
        this.props.onLogoutHandler();
    }
    _renderUserInfo() {
        if( this.props.info.name ) {
            return (
                <div>
                    <img src={this.props.info.picture} />
                    <p>{this.props.info.name}</p>
                    <a onClick={this._logout}>Logout facebook</a>
                </div>
            );
        }else {
            return (
                <div>
                    <a onClick={this._login}>Login facebook</a>
                </div>
            )
        }
    }
    render() {
        let element = this._renderUserInfo();
        return (
            <div>
                { element }
            </div>
        );
    }
};

UserInfo.propsType = {
    onLoginHandler  : React.PropTypes.func,
    onLogoutHandler : React.PropTypes.func,
    info            : React.PropTypes.string
};

UserInfo.defaultProps = {
    onLoginHandler  : () => {},
    onLogoutHandler : () => {},
    info : {
        name    : '',
        picture : ''
    }
};
export default UserInfo;
