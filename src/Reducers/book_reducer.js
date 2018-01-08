import * as types from '../Actions/types';
export default function (state = {}, action){
  switch(action.type){
    case types.DELETED_BOOK:
    case types.GET_BOOKS:
      return {...state, books: action.payload};
    default:
      return state;
  }
}
