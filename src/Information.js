import React, { Component } from 'react';

export default class Information extends Component{

	render () {
		if (this.state != null && this.state.busStop != null ) {
			var info_stops_html = this.state.busStop.additionalProperties.map(x => 
				<p key={x.id}>{x.key}: {x.value}</p>)
			
			return <div className="information columns">
				<h1>{this.state.busStop.commonName}</h1>
				{info_stops_html}

			</div>
		} else {
			return <div></div>;
		}	

	}

	updateInfo(busStop){
		this.setState({busStop: busStop})
		console.log(busStop)
	}
	

}