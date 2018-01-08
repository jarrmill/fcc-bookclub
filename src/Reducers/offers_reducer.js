import * as types from '../Actions/types';
export default function (state = {offers: {}, requests: {}}, action){
  switch(action.type){
    case types.OFFERS:
      console.log("Setting user offers!: ", action.payload.data);
      return {...state, offers: action.payload.data};
    case types.REQUESTS:
      console.log("Setting user requests!: ", action.payload.data);
      return {...state, requests: action.payload.data}
    default:
      return state;
  }
}
