import React, { Component } from 'react';
import Works from './Works.js'
import SearchResults from './SearchResults.js'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  
constructor() {
  super();
  this.state = {
      zipcode: "",
      showResult: false
  };
}

render() {
  let comp;
    if (this.state.showResult === true){
      comp = <SearchResults />
    } else{
      comp =<Works />
    } 
  return (
    <div>
      <form className="searchform"  onSubmit={(e) => {
                e.preventDefault();
                console.log("before ")
                if (this.props.searchTrucks) {
                  console.log("After ")
                  this.props.searchTrucks(this.state.zipcode);
                  this.setState({
                    showResult: true
                  });
                }
              }}>
      <input className="searchinput" type="text" placeholder="ZipCode" name="search2" 
        onChange={(e) => {
          const zip = e.target.value;
          this.setState({
            zipcode: zip
          });
        }}  />
      <button className="searchbutton" type="submit"><i class="fa fa-search"></i></button>
      </form>

      {comp}
      
    </div>
       
  );    
}

}
  
export default Home;