import * as types from '../Actions/types';
export default function (state = {}, action){
  switch(action.type){
    case types.USER_BOOKS:
      console.log("Setting user books");
      return {...state, userbooks: action.payload.data};
    default:
      return state;
  }
}
