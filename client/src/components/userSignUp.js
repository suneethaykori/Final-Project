import React, { Component } from 'react';

class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: ""
      }
    };
  }

    render() {
      return (
        <div>
            <h1> User SignUp</h1>
            <p>Please fill in this form to create an user account.</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Before this");
                if (this.props.createUser) {
                  console.log("After this");

                  console.log(this.state.user)
                  this.props.createUser(this.state.user);
                }
              }}>
            <label for="fname"><b>First Name *</b></label><br />
            <input className="searchinput" type="text" placeholder="First Name" name="fname"  
                onChange={(e) => {
                  const user = {fname: e.target.value};
                  this.setState({
                    user: Object.assign(this.state.user,user)
                  });
                }}             
              /> <br />
            <label for="lname"><b>Last Name *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Last Name" name="lname"   
                onChange={(e) => {
                  const user = {lname: e.target.value};
                  this.setState({
                    user: Object.assign(this.state.user,user)
                  });
                }}             
              /> <br />
            <label for="email"><b>E-mail *</b></label> <br />
            <input className="searchinput" type="text" placeholder="E-mail" name="email"   
                onChange={(e) => {
                  const user = {email: e.target.value};
                  this.setState({
                    user: Object.assign(this.state.user,user)
                  });
                }}             
              /> <br />
            <label for="pnum"><b>Phone Number *</b></label> <br />
            <input className="searchinput" type="text" placeholder="Phone Number" name="pnum"   
                onChange={(e) => {
                  const user = {phone: e.target.value};
                  this.setState({
                    user: Object.assign(this.state.user,user)
                  });
                }}             
              /> <br />
            <label for="password"><b>Password *</b></label> <br />
            <input className="searchinput" type="password" placeholder="password" name="password"   
                onChange={(e) => {
                  console.log("Entered Password")
                  const user = {password: e.target.value};
                  this.setState({
                    user: Object.assign(this.state.user,user)
                  });
                }}             
              /> <br />
            <button className="searchbutton">SignUp</button> <br />
            </form>
        </div>
      );
    }
  }
  
  export default UserSignUp;
/*
  import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: {
        body: ""
      },
      contact: {
        name: "",
        occupation: "",
        avatar: ""
      },
      vehicle: {
        year: "",
        make: "",
        model: ""
      },
      product: {
        name: "",
        description: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createComment) {
              this.props.createComment(this.state.comment);
            }
          }}>
            <div>
              Body: <input onChange={(e) => {
                const comment = {body: e.target.value};
                this.setState({
                  comment: Object.assign(this.state.comment,comment)
                });
              }} />
            </div>
            <button>Create</button> 
          </form>
        </div>
        <div>
          <h1>Contact</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createContact) {
              this.props.createContact(this.state.contact);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const contact = {name: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Occupation: <input onChange={(e) => {
                const contact = {occupation: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <div>
              Avatar: <input onChange={(e) => {
                const contact = {avatar: e.target.value};
                this.setState({
                  contact: Object.assign(this.state.contact,contact)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Vehicle</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
        <div>
          <h1>Product</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createProduct) {
              this.props.createProduct(this.state.product);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const product = {name: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <div>
              Description: <input onChange={(e) => {
                const product = {description: e.target.value};
                this.setState({
                  product: Object.assign(this.state.product,product)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>        
      </div>
      
    );
  }
}
export default CreateThings;
*/
