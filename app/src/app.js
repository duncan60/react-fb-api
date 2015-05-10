import React from 'react';
//actions
import fbLoginActions from './actions/fbLoginActions';
import fbGraphActions from './actions/fbGraphActions';
//stores
import fbLoginStore from './stores/fbLoginStore';
import fbGraphStore from './stores/fbUserStore';

//view
import UserInfo from './view/user-info';

let actionMaps = {
	login       : fbLoginActions.login,
	getUserInfo : fbGraphActions.getUserInfo
}

class App extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			userInfo : {
				picture : '',
				name    : ''
			}
		};
	}
	componentDidMount() {
		fbLoginStore.addChangeListener(this._onFbLoginStoreChange.bind(this));
		fbGraphStore.addChangeListener(this._onFbGraphChange.bind(this));
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
  		actionMaps.getUserInfo();
  	}
  	_onFbGraphChange() {
  		this.setState({
  			userInfo : fbGraphStore.getUserInfo()
  		});
  	}
  	/* jshint ignore:start */
  	render() {
		return (
			<div>
				<UserInfo onClickHandler={this._onLoginHandeler.bind(this)} info={this.state.userInfo}  />
			</div>);
  	}
  	/* jshint ignore:end */
}
export default App;