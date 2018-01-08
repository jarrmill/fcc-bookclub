import axios from 'axios';
import * as types from './types';

const root_url = "https://fcc-bookclub-server.herokuapp.com/bookclub"

//---------------------
//plain ole javascript functions
//---------------------
var fetchBooks = new Promise((resolve, reject) => {
  axios.get(`${root_url}/getallbooks`).then(response => {
    resolve(response);
  }).catch(error => {
    reject(error);
  });
});

//------------------------
//action javascript functions
//------------------------
export function setBooks(books){
  return new Promise((resolve, reject) => {
    fetchBooks.then((results) => {
      resolve({type: types.GET_BOOKS, payload: results});
    }).catch(error => {
      console.log(error);
    });
  });
}

export function setAuth(auth){
  return {type: types.SET_USER, payload: auth}
}
export function getAllBooksByUser(user){
  return new Promise((resolve, reject) => {
    axios.get(`${root_url}/getallbooksbyuser`, {"headers": {"user":user}})
    .then(response => {
      resolve({type:types.USER_BOOKS, payload: response});
    });
  })
}
export function getOffersByUser(user){
  return new Promise((resolve, reject) => {
    axios.get(`${root_url}/getoffersbyuser`, {headers: {offerUser:user}})
    .then(response => {
      console.log("Offers for user ", user, ": ", response.data);
      resolve({type:types.OFFERS, payload: response});
    });
  });
}
export function getRequestsByUser(user){
  return new Promise((resolve, reject) => {
    axios.get(`${root_url}/getrequestsbyuser`, {"headers": {"requestUser":user}})
    .then(response => {
      console.log("Requests for user ", user, ": ", response.data);
      resolve({type:types.REQUESTS, payload: response});
    });
  });
}
export function deleteBook(bookId){
  return new Promise((resolve, reject) => {
    axios.post(`${root_url}/deletebook`, {bookId: bookId})
    .then(response => {
      resolve({type:types.DELETED_BOOK, payload: response});
    }).catch(error => {
      console.log("Deletebook error: ", error)
    });
  });
}

export function requestBookTrade(requested, offered){
  const body = {
    offerId : offered._id,
    offerUser : offered.user,
    requestId: requested._id,
    requestUser: requested.user,
  }
  axios.post(`${root_url}/inittrade`, body).catch(error => console.log(error));
  //enter code here
  return {type:"null"}
}
export function finalizeBookTrade(bookTrade){
  axios.post(`${root_url}/finalizebooktrade`, {traderequest: bookTrade}).catch(error => {
    console.log(error);
  })
}
