import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { MainPage, TileContainer } from './ub_styled';
import NotFound from '../NotFound/NotFound';
import * as actions from '../Actions/index';
import BookTile from './bookTile';
import _ from 'lodash';

class UserBooks extends Component {
  componentWillMount(){
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile }, () => {
          this.fetchBooks();
        });
      });
    } else {
      this.setState({ profile: userProfile }, () => {
        this.fetchBooks();
      });
    }

  }

  renderBooks(){
    var book_array = [];
    if(_.isEmpty(this.props.userbooks)){
      return <NotFound />
    }
    book_array = this.props.userbooks.userbooks.map((book, i) => {
      return <BookTile book={book} key={i} deleteBook={this.props.deleteBook}></BookTile>
    });
    return book_array;
  }
  fetchBooks(){
    this.props.getAllBooksByUser(this.state.profile.nickname);
  }
  render() {
    console.log("User books: ", this.props.userbooks);
    return (
      <MainPage><h1>Your Books</h1>
        <TileContainer>
          {this.renderBooks()}
        </TileContainer>
      </MainPage>
    );
  }
}
function mapStateToProps(state){
  return {
    authentication: state.auth,
    userbooks: state.userbooks
  }
}

export default connect(mapStateToProps, actions)(UserBooks);
