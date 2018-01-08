import React, { Component } from 'react';
import {  connect } from 'react-redux';
import * as actions from '../Actions/index';
import BookTile from './bookTile';
import { TileContainer, BannerContainer, MainPage } from './banner_styled';
import _ from 'lodash';

class Splash extends Component {
  constructor(props){
    super(props);
    this.state = ({showModal: false });
  }
  login() {
    this.props.auth.login();
  }
  componentWillMount(){
    this.props.setBooks();
  }

  renderTiles(){
    let tileList = [];
    if(_.isEmpty(this.props.books)){
      return <div> ...loading </div>
    }

    tileList = this.props.books.books.data.map((book, i) => {
      return <BookTile book={book}
                       index={i}
                       initTrade={this.initTrade}
                       auth={this.props.authentication}
                       />
    });
    return tileList;
  }
  render() {
    //          <Banner src={require('../Assets/banner.jpg')} />
    return (
      <MainPage>
        <BannerContainer>

        </BannerContainer>
        <TileContainer>
          {this.renderTiles()}
        </TileContainer>
      </MainPage>
    );
  }
}
function mapStateToProps(state){
  return {
    authentication: state.auth,
    books: state.books
  }
}

export default connect(mapStateToProps, actions)(Splash);
