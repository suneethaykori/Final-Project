import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './App.css';
import Home from './containers/SearchTrucksContainer.js';
import UserLogin from './components/userLogin.js';
import UserSignUp from './containers/userSignupContainer.js';
import TruckOwnerLogin from './components/truckOwnerLogin.js';
import TruckOwnerSignUp from './containers/tOwnerSignUpContainer.js';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  state = {
    currentPage : "Home",
    isLoggedIn : false
  }

  buttonClick(buttonName){
    console.log(buttonName);
    this.setState({
      currentPage : buttonName
    });
  }

  render() {
    let comp;
    if (this.state.currentPage === "Home"){
      comp = <Home />
    } else if(this.state.currentPage === "UserLogin"){
      comp =<UserLogin />
    } else if(this.state.currentPage === "UserSignUp"){
      comp =<UserSignUp />
    } else if(this.state.currentPage === "TruckOwnerLogin"){
      comp =<TruckOwnerLogin />
    } else if(this.state.currentPage === "TruckOwnerSignUp"){
      comp =<TruckOwnerSignUp />
    } 
   

    return (
      <div>
        <header>
          <div >
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
             <a href="#"> <img src={logo}  alt="logo" className="logo"/> </a>
              
              <button className="rtbutton" type="button" onClick={() => this.buttonClick('Home')}>Home</button>
              <button className="rtbutton" type="button" onClick={() => this.buttonClick('UserLogin')}>User Login</button>
              <button className="rtbutton" type="button" onClick={() => this.buttonClick('UserSignUp')}>User SignUp</button>
              <button className="rtbutton" type="button" onClick={() => this.buttonClick('TruckOwnerLogin')}>Truck Owner Login</button>
              <button className="rtbutton" type="button" onClick={() => this.buttonClick('TruckOwnerSignUp')}>Truck Owner SignUp</button>
              
            </nav>
            
          </div>
        </header>
        {comp};
      </div>
    );
  }
}

export default App;
