import React, { Component } from 'react';

class TruckOwnerSignUp extends Component {
  
    render() {
      return (
        <div>
            <h1> Truck Owner SignUp</h1>
            <p>Please fill in this form to create an user account.</p>
            <form >
            <label for="fname"><b>First Name *</b></label><br />
            <input className="searchinput" type="text" placeholder="First Name" name="fname"  /> <br />
            <label for="lname"><b>Last Name *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Last Name" name="lname"  /> <br />
            <label for="pnum"><b>Phone Number *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Phone Number" name="pnum"  /> <br />
            <label for="password"><b>Password *</b></label> <br />
            <input className="searchinput" type="password" placeholder="password" name="password"  /> <br />
            <button className="searchbutton" type="submit">SignUp</button> <br />
            </form>
        </div>
      );
    }
  }
  
  export default TruckOwnerSignUp;