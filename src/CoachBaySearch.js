import React, { Component } from 'react';
export default class CoachBaySearch extends Component {
  render() {
  	var stops_html = this.state.CoachBayData.map(x => <p key={x.id}>{x.commonName}</p>)
    return (  
      <div>

        <form action="" method="post" className="button">
          <input type="search" name="" placeholder="поиск" className="input" />
          <input type="submit" name="" value="" className="submit" />
        </form>
        <button onClick={this.handleClick}>
        	{this.state.isToggleOn ? 'ON' : 'OFF'}
      	</button>
      	{stops_html}
      </div>
      );
  }
   componentDidMount() {
		const URL = "https://api.tfl.gov.uk/Place/Type/CoachBay/";

		fetch(URL).then(res => res.json()).then(json => {
			this.setState({ CoachBayData: json });
		});	
    }
   constructor(props) {
    super(props);
    this.state = {isToggleOn: true, CoachBayData: []};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

}