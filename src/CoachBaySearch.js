import React, { Component } from 'react';
export default class CoachBaySearch extends Component {
  render() {
      var stops_html = this.state.CoachBayData.filter((x, i) => {
      if (this.state.query == "") {
        return true
      } else {
  		return (x.commonName.toLowerCase().indexOf(this.state.query) > -1)
    }}).map(x => <p key={x.id}>{x.commonName}</p>)
  


    return (  
      <div>
        <form action="" method="post" class="search">
        <input type="search" name="" placeholder="Search" className="input" 
        ref={input => this.search = input}
        onChange={this.handleInputChange.bind(this)}
        />
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
    this.state = {isToggleOn: true, CoachBayData: [], query: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleInputChange() {
  	if (this.search.value.length >= 3) { 
  	console.log(this.search.value.toLowerCase())
  }
  	this.setState({ 
  		query: this.search.value
  	})
  }
}