import {combineReducers} from 'redux';



function users(state = 0,action){
 return state;
}

function truckOwner(state = 0,action){
 return state;
}


function search(state = 0,action){
    return state;
}
   
function home(state = 0,action){
return state;
}


function trucks(state = 0, action) {
    if (action.type === "TRUCKS_LOADED") {
      return action.value;
    }
    return state;
  }
  

const rootReducer = combineReducers({
users,truckOwner,search, home, trucks
});

export default rootReducer;