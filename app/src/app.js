import React from 'react';
import BaseCompoent from './components/base-component';
//actions
import fbLoginActions from './actions/fbLoginActions';
import fbGraphActions from './actions/fbGraphActions';
//stores
import fbLoginStore from './stores/fbLoginStore';
import fbGraphStore from './stores/fbUserStore';

//view
import UserInfo from './components/user-info';

let actionMaps = {
	login       : fbLoginActions.login,
	logout      : fbLoginActions.logout,
	getUserInfo : fbGraphActions.getUserInfo
}

class App extends BaseCompoent {
  	constructor(props) {
		super(props);
		this.state = {
			userInfo : {
				picture : '',
				name    : ''
			}
		};
		this._bind(
			'_onFbLoginStoreChange',
			'_onFbGraphChange',
			'_fbLogin',
			'_fbLogout'

		);
	}
	componentDidMount() {
		fbLoginStore.addChangeListener(this._onFbLoginStoreChange);
		fbGraphStore.addChangeListener(this._onFbGraphChange);
	}
	componentWillUnmount() {
		fbLoginStore.removeChangeListener(this._onFbLoginStoreChange);
		fbGraphStore.removeChangeListener(this._onFbGraphChange);
	}
  	_fbLogin() {
		actionMaps.login();
  	}
  	_fbLogout() {
		actionMaps.logout();
  	}
  	_onFbLoginStoreChange(type) {
  		console.log('_onFbLoginStoreChange',type);
  		actionMaps.getUserInfo();
  	}
  	_onFbGraphChange(type) {
  		console.log('_onFbGraphChange',type);
  		this.setState({
  			userInfo : fbGraphStore.getUserInfo()
  		});
  	}
  	/* jshint ignore:start */
  	render() {
		return (
			<div>
				<UserInfo 
					onLoginHandler={this._fbLogin}
					onLogoutHandler={this._fbLogout}
					info={this.state.userInfo}  />
			</div>);
  	}
  	/* jshint ignore:end */
}
export default App;