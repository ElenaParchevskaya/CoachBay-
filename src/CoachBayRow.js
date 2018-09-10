import React, { Component } from 'react';
export default class CoachBayRow extends Component {
	render() {
		var busStop = this.props.model
		return <a onClick={this.handleClick.bind(this)} href="#">{busStop.commonName}</a>		
	}

  handleClick() {
    this.props.updateInfo(this.props.model)
  }

}