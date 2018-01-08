import React, { Component } from 'react';
import {  connect } from 'react-redux';
import * as actions from '../Actions/index';
import BookTile from './bookTile';
import BookCheckbox from './bookCheckbox';
import { TileContainer, MainPage, ModalButton, ExitButton } from './home_styled.js';
import Modal from 'react-modal';
import _ from 'lodash';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = ({showModal: false, bookOffered: {}});
    console.log("auth: ", this.props.authentication);
  }
  login() {
    this.props.auth.login();
  }
  componentWillMount(){
    this.setState({profile: {}});
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.props.setAuth(profile);
        this.props.getAllBooksByUser(profile.nickname);
      });
    } else {
      this.props.setAuth(userProfile);
      this.props.getAllBooksByUser(userProfile.nickname);
    }
    this.props.setBooks();
  }
  initTrade = (bookRequested) => {
    this.setState({bookRequested, showModal: true});
  };
  finishTrade = () => {
    this.props.requestBookTrade(this.state.bookRequested, this.state.bookOffered);
    this.setState({showModal: false});
  };
  closeModal = () => {
    this.setState({showModal: false});
  };
  selectBook = (event, bookOffered) => {
    console.log("Selecting book: ", bookOffered.title);
    this.setState({bookOffered});
  };
  editBook = () => {

  };
  renderTiles(){
    let tileList = [];
    if(_.isEmpty(this.props.books)){
      return <div> ...loading </div>
    }
    if(!_.isEmpty(this.props.authentication)){
      tileList = this.props.books.books.data.map((book, i) => {
        return <BookTile book={book}
                         index={i}
                         initTrade={this.initTrade}
                         editBook={this.editBook}
                         auth={this.props.authentication}
                         />
      });
      return tileList;
    }
    console.log("No dice: ", this.props.authentication);
    return <div>loading... ugh.</div>
  }
  renderUserBooks(){
    let tileList = [];
    if(_.isEmpty(this.props.userbooks)){
      return <div> make some books to initiate trade!</div>
    }
    tileList = this.props.userbooks.map((book, i) => {
      return <BookCheckbox key={i}
                           book={book}
                           handleChange={this.selectBook}
                           selectedBook={this.state.bookOffered}/>
    });
    return tileList;
  }
  render() {
    return (
      <MainPage>
          <TileContainer>
            {this.renderTiles()}
          </TileContainer>
        <Modal
          isOpen={this.state.showModal}
        >
        <ExitButton onClick={()=> this.closeModal()}>X</ExitButton>
        <h1>Choose a book you would like to trade.</h1>
        {this.renderUserBooks()}
        <br></br>
        <ModalButton
          onClick={()=> this.finishTrade()}
          disabled={(!this.state.bookOffered)}> Submit </ModalButton>
        </Modal>
      </MainPage>
    );
  }
}
function mapStateToProps(state){
  return {
    authentication: state.auth,
    books: state.books,
    userbooks: state.userbooks.userbooks
  }
}

export default connect(mapStateToProps, actions)(Home);
