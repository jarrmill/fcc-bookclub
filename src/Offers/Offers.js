import React, { Component } from 'react';
import {  connect } from 'react-redux';
import * as actions from '../Actions/index';
import OfferPanel from './offerpanel';
import NotFound from '../NotFound/NotFound';
import _ from 'lodash';

class Offers extends Component {
  constructor(props){
    super(props);
    console.log("Offers? ", this.props.offers);
  }
  componentWillMount(){
    this.setState({ profile: {} });
    console.log("Setting profile?");
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile }, () => {
          this.props.getOffersByUser(this.state.profile.nickname);
        });

      });
    } else {
      this.setState({ profile: userProfile }, () => {
        this.props.getOffersByUser(this.state.profile.nickname);
      });
    }
    //
  }
  findBookById = (id) => {
    var books = this.props.books.books.data;
    for (var i = 0; i < books.length; i++){
      if(id === books[i]._id){
        return books[i];
      }
    }
  };
  renderOffers(){
    if(_.isEmpty(this.props.offers)){
      return <NotFound />
    }
    var offeredBook = this.findBookById(this.props.offers[0].offerId);
    var requestedBook = this.findBookById(this.props.offers[0].requestId);
    var requestArray = this.props.offers.map((offer, i) => {
      return <OfferPanel offer={offer}
                           offered={offeredBook}
                           requested={requestedBook}
                           index={i} />
    });
    return requestArray;
  }
  render() {
    return (
      <div>
        <p style={{"font-family": "Helvetica"}}>Your Pending Offers</p>
        {this.renderOffers()}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    authentication: state.auth,
    offers: state.offers.offers,
    books: state.books
  }
}

export default connect(mapStateToProps, actions)(Offers);
