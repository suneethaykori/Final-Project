import React, { Component } from 'react';

class TruckOwnerSignUp extends Component {
  constructor() {
    super();
    this.state = {
        tOwner:{
        fname:"",
        lname: "",
        email: "",
        phone: "",
        password: "",
        truckmodel:"",
        truckmake:"",
        costperhour:"",
        zipcode:""
      }
    };
  }

  
    render() {
      return (
        <div>
            <h1> Truck Owner SignUp</h1>
            <p>Please fill in this form to create an user account.</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Before this");
                if (this.props.createTruckOwner) {
                  console.log("After this");

                  console.log(this.state.tOwner)
                  this.props.createTruckOwner(this.state.tOwner);
                }
              }}>
            <label for="fname"><b>First Name *</b></label><br />
            <input className="searchinput" type="text" placeholder="First Name" name="fname" 
              onChange={(e) => {
                const trUser = {fname: e.target.value};
                this.setState({
                  tOwner: Object.assign(this.state.tOwner,trUser)
                });
            }} /> <br />
            <label for="lname"><b>Last Name *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Last Name" name="lname"
                onChange={(e) => {
                  const trUser = {lname: e.target.value};
                  this.setState({
                    tOwner: Object.assign(this.state.tOwner,trUser)
                  });
                }}             
              /> <br />

            <label for="email"><b>E-mail *</b></label> <br />
            <input className="searchinput" type="text" placeholder="E-mail" name="email"   
                onChange={(e) => {
                  const trUser = {email: e.target.value};
                  this.setState({
                    tOwner: Object.assign(this.state.tOwner,trUser)
                  });
                }}             
              /> <br />

            <label for="pnum"><b>Phone Number *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Phone Number" name="pnum" 
              onChange={(e) => {
                const trUser = {phone: e.target.value};
                this.setState({
                  tOwner: Object.assign(this.state.tOwner,trUser)
                });
              }}             
             /> <br />
            <label for="password"><b>Password *</b></label> <br />
            <input className="searchinput" type="password" placeholder="password" name="password" 
              onChange={(e) => {
              console.log("Entered Password")
              const trUser = {password: e.target.value};
              this.setState({
                tOwner: Object.assign(this.state.tOwner,trUser)
              });
            }}  /> <br />

          <label for="truckmodel"><b>Truck Model *</b></label> <br />
            <input className="searchinput" type="truckmodel" placeholder="Truck Model" name="truckmodel" 
              onChange={(e) => {
              console.log("Entered Password")
              const trUser = {truckmodel: e.target.value};
              this.setState({
                tOwner: Object.assign(this.state.tOwner,trUser)
              });
            }}  /> <br />

          <label for="truckmake"><b>Truck Make *</b></label> <br />
            <input className="searchinput" type="truckmake" placeholder="Truck Make" name="truckmake" 
              onChange={(e) => {
              console.log("Entered Password")
              const trUser = {truckmake: e.target.value};
              this.setState({
                tOwner: Object.assign(this.state.tOwner,trUser)
              });
            }}  /> <br />

            <label for="costperhour"><b>Cost Per Hour *</b></label> <br />
            <input className="searchinput" type="costperhour" placeholder="Cost Per Hour" name="costperhour" 
              onChange={(e) => {
              console.log("Entered Password")
              const trUser = {costperhour: e.target.value};
              this.setState({
                tOwner: Object.assign(this.state.tOwner,trUser)
              });
            }}  /> <br />

            <label for="zipcode"><b>zipcode *</b></label> <br />
            <input className="searchinput" type="zipcode" placeholder="Zipcode" name="zipcode" 
              onChange={(e) => {
              console.log("Entered Password")
              const trUser = {zipcode: e.target.value};
              this.setState({
                tOwner: Object.assign(this.state.tOwner,trUser)
              });
            }}  /> <br />

            <button className="searchbutton" type="submit">SignUp</button> <br />
            </form>
        </div>
      );
    }
  }
  
  export default TruckOwnerSignUp;