import axios from 'axios';

const root_url = "http://localhost:3091/bookclub"

export var fetchBooks = new Promise((resolve, reject) => {
  var results = [];
  axios.get(`${root_url}/getallbooks`).then(response => {
    response.data.forEach(function(book, i){
      fetchPicture(book).then(result => {
        results.push(result);
      })
    })
    resolve(results);
  }).catch(error => {
    reject(error);
  });
});

export function fetchPicture(book){
  return new Promise((resolve, reject) => {
    axios.get(`${root_url}/getpicture`, {"headers": {"path": book.file.path}})
    .then(response => {
      var result = {
        title: book.title,
        author: book.author,
        genre: book.genre,
        img: response.data
      };
      resolve(result);
    }).catch(error => reject(error));
  });
}
