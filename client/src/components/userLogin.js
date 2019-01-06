import React, { Component } from 'react';

class UserLogin extends Component {
    
  
    render() {
      return (
        <div>
            <h1> UserLogin</h1>
            <form >
            <input className="searchinput" type="text" placeholder="User Name" name="name"  /> <br />
            <input className="searchinput" type="password" placeholder="password" name="password"  /> <br />
            <button className="searchbutton" type="submit">Login</button>
            </form>
        </div>
      );
    }
  }
  
  export default UserLogin;