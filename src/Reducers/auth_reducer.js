import * as types from '../Actions/types';
export default function (state = {authenticated: false}, action){
  switch(action.type){
    case types.SET_USER:
      return {...state, authenticated: true, user: action.payload};
    case types.DEAUTH_USER:
      return {...state, authenticated: false, user: {}};
    default:
      return state;
  }
}
