import { connect } from "react-redux";
import TruckOwnerSignUp from "../components/truckOwnerSignUp";
import {  createTruckOwner } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createTruckOwner: function (towner) {
      dispatch(createTruckOwner(towner));
    },
  };
}

export default connect(null,mapDispatchToProps)(TruckOwnerSignUp);