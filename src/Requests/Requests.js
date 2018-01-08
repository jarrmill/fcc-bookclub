import React, { Component } from 'react';
import {  connect } from 'react-redux';
import * as actions from '../Actions/index';
import NotFound from '../NotFound/NotFound';
import RequestPanel from './requestpanel';
import _ from 'lodash';

class Requests extends Component {
  constructor(props){
    super(props);
    console.log("Requests?: ", this.props.requests);
  }
  componentWillMount(){
    this.setState({ profile: {} });
    console.log("Setting profile?");
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile }, () => {
          console.log("User profile: ", this.state.profile.nickname);
          this.props.getRequestsByUser(this.state.profile.nickname);

        });

      });
    } else {
      this.setState({ profile: userProfile }, () => {
        console.log("User profile: ", this.state.profile.nickname);
        this.props.getRequestsByUser(this.state.profile.nickname);
      });
    }
    //
  }
  renderRequests(){
    if(_.isEmpty(this.props.requests)){
      return <NotFound />
    }

    var offeredBook = this.findBookById(this.props.requests[0].offerId);
    var requestedBook = this.findBookById(this.props.requests[0].requestId);
    var requestArray = this.props.requests.map((req, i) => {
      return <RequestPanel request={req}
                           offered={offeredBook}
                           requested={requestedBook}
                           acceptTrade={this.acceptTrade}
                           index={i} />
    });
    return requestArray;
  }
  findBookById = (id) => {
    var books = this.props.books.books.data;
    for (var i = 0; i < books.length; i++){
      if(id === books[i]._id){
        return books[i];
      }
    }
  };
  acceptTrade = (tradeRequest) => {
    console.log("Requested trade: ", tradeRequest);
    this.props.finalizeBookTrade(tradeRequest);
  }
  render() {
    return (
      <div>
        <p style={{"font-family": "Helvetica"}}>Your Pending Requests</p>
        {this.renderRequests()}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    authentication: state.auth,
    requests: state.offers.requests,
    books: state.books
  }
}

export default connect(mapStateToProps, actions)(Requests);
