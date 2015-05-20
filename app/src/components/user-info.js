import React from 'react';
import BaseCompoent from '../components/base-component';

class UserInfo extends BaseCompoent {
    constructor(props) {
        super(props);
        this._bind(
            '_renderUserInfo'
        );
    }
    _renderUserInfo() {
        const {info} = this.props;
        if( this.props.info.name ) {
            return (
                <div>
                    <img src={info.picture} />
                    <p>{info.name}</p>
                    <a onClick={this.props.onLogoutHandler}>Logout facebook</a>
                </div>
            );
        }else {
            return (
                <div>
                    <a onClick={this.props.onLoginHandler}>Login facebook</a>
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
