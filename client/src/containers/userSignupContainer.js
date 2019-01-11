import { connect } from "react-redux";
import UserSignUp from "../components/userSignUp";
import {  createUser } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createUser: function (user) {
      dispatch(createUser(user));
    },
  };
}

export default connect(null,mapDispatchToProps)(UserSignUp);
