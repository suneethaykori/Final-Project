import React from "react";

function SearchResults(props) {
  let userDivs = "";
  userDivs = props.trucks.map((d) => {
    return (
      <div >
        <p>{d.fname} {d.lname} {d.email} {d.phone} {d.truckmake} {d.truckmodel} {d.costperhour} </p>
      </div>
    );
  });

  return (
    <div>
      {userDivs}
    </div>
  );
}
export default SearchResults;
