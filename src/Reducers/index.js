import {combineReducers} from 'redux';
import authReducer from './auth_reducer';
import bookReducer from './book_reducer';
import userbooksReducer from './userbooks_reducer';
import offersReducer from './offers_reducer';
//import * as types from '../Actions/types';

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  userbooks: userbooksReducer,
  offers: offersReducer,
});

export default rootReducer;
