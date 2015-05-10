import React from 'react';

class UserInfo extends React.Component {
	_click() {
		this.props.onClickHandler();
	}

	render() {
		return (
			<div>
				<div>
					<img src={this.props.info.picture.data.url} />
					<p>{this.props.info.name}</p>
				</div>
				<a onClick={this._click.bind(this)}>Login facebook</a>
			</div>
		);
	}
};

UserInfo.propsType = {
	onClickHandler : React.PropTypes.func,
	info           : React.PropTypes.object
};

UserInfo.defaultProps = {
	onClickHandler : function(){},
	info : {
		name    : '',
		picture : ''
	}
};
export default UserInfo;
