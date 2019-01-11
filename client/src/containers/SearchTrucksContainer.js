import { connect } from "react-redux";
import Home from "../components/home";
import {  searchTrucks } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    searchTrucks: function (zip) {
      dispatch(searchTrucks(zip));
    },
  };
}

export default connect(null,mapDispatchToProps)(Home);
