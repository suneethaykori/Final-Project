export function searchTrucks(zip) {
  return function (dispatch) {
    fetch(`/search/${zip}`)
    .then( (response) => {
      return response.json();
    }).then((trucks) => {
      console.log(trucks)
      dispatch(trucksLoaded(trucks));
    });
  };
}
function trucksLoaded(trucks) {
  return {
    type: "TRUCKS_LOADED",
    value: trucks
  };
}

export function loadProducts() {
  return function (dispatch) {
  };
}
  
export function createUser(user) {
  return function (dispatch) {
    console.log("Came in the Create User!!!!!!!!!")
    fetch("/user", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(() => dispatch(loadProducts()));
  };
}

export function createTruckOwner(towner) {
  return function (dispatch) {
    fetch("/truckowner", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(towner)
    }).then(() => dispatch(loadProducts()));
  };
}