import React, { Component } from 'react';

export default class Invitation extends Component {
	render() {
		return (
			<div>
			<h1>You've been invited!</h1>
			{this.props.children}
			</div>
			)
	}
}

