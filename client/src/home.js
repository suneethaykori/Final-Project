import React, { Component } from 'react';
import login from './images/loginicon.jpg';
import search from './images/zipicon.jpg';
import truck from './images/truckicon.png';
import contact from './images/contacticon1.jpg';



//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  
render() {
  return (
    <div>
      <form className="searchform" >
      <input className="searchinput" type="text" placeholder="ZipCode" name="search2"  />
      <button className="searchbutton" type="submit"><i class="fa fa-search"></i></button>
      </form>
      
      <section>
        <article>
          <h1> How it Works?</h1>
          
          <div className="features">
            <img src={login} alt="service" width="185px" height="185px"></img>
            <h2>Creat a Login </h2>
          </div>
          <div className="features">
            <img src={search} alt="service" width="185px" height="185px"></img>
            <h2>Search by your Zipcode</h2>
          </div>
          <div className="features">
            <img src={truck} alt="service" width="185px" height="185px"></img>
            <h2>Choose your Truck </h2>
          </div>
          <div className="features">
            <img src={contact} alt="service" width="185px" height="185px"></img>
            <h2>Contact them for the move</h2>
          </div>

        </article>
      </section>
      
    </div>
       
  );    
}


}
  
export default Home;