import React, { Component } from 'react';
import CoachBayRow from './CoachBayRow.js'
export default class CoachBaySearch extends Component {
  render() {
      var stops_html = this.state.CoachBayData.filter((x, i) => {
      if (this.state.query == "") {
        return true
      } else {
  		return (x.commonName.toLowerCase().indexOf(this.state.query) > -1)
    }}).map(x => <CoachBayRow updateInfo={this.props.updateInfo} model={x} key={x.id}/>)
  


    return (  
      <div className="coachBaySearch columns">
        <form action="" method="post" className="search">
        <input type="search" name="" placeholder="Search" className="input" 
        ref={input => this.search = input}
        onChange={this.handleInputChange.bind(this)}
        />
         </form>
        <div className="stops">
      	 {stops_html}
        </div>
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
    this.state = {CoachBayData: [], query: ""};
  }

    handleInputChange() {
  	
  	  this.setState({ 
  		query: this.search.value
  	})
  }
}