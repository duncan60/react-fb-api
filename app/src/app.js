import React from 'react';
//actions
import fbLoginActions from './actions/fbLoginActions';
import fbGraphActions from './actions/fbGraphActions';
//stores
import fbLoginStore from './stores/fbLoginStore';
import fbGraphStore from './stores/fbUserStore';

let actionMaps = {
	login       : fbLoginActions.login,
	getUserInfo : fbGraphActions.getUserInfo
}

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		fbLoginStore.addChangeListener(this._onFbLoginStoreChange);
		fbGraphStore.addChangeListener(this._onFbGraphChange);
	}
	componentWillUnmount() {
		fbLoginStore.removeChangeListener(this._onFbLoginStoreChange);
		fbGraphStore.removeChangeListener(this._onFbGraphChange);
	}
  	_onLoginHandeler() {
		actionMaps.login();
  	}
  	_onGetUserInfoHandeler() {
		actionMaps.getUserInfo();
  	}

  	_onFbLoginStoreChange() {
  		console.log('_onFbLoginStoreChange');
  	}
  	_onFbGraphChange() {
  		console.log('_onFbGraphChange',fbGraphStore.getUserInfo());
  	}
  	/* jshint ignore:start */
  	render() {
		return (
			<div>
				<a onClick={this._onLoginHandeler.bind(this)}>Login facebook</a>
				<a onClick={this._onGetUserInfoHandeler.bind(this)}>get User Info</a>
			</div>);
  	}
  	/* jshint ignore:end */
}
export default App;