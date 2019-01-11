import { connect } from "react-redux";
import SearchResults from "../components/SearchResults";

function mapStateToProps(state) {
  return {
    trucks: state.trucks
  };
}

export default connect(mapStateToProps)(SearchResults);