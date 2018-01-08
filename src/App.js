import React, { Component } from 'react';
import { Button, Logo, LogoContainer, Title } from './header_styled';
import {  connect } from 'react-redux';
import * as actions from './Actions/index';
import './App.css';
class App extends Component {
  componentWillMount(){
    this.props.setBooks();
  }
  componentDidMount(){
    this.props.history.push('/home');
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const homeOrSplash = isAuthenticated() ? 'home' : 'splash';
    const title = "FCC Book Club"
    return (
      <div>
        <div>
          <div>
            <LogoContainer>
              <Logo src={require('./Assets/book_vector.png')} />
              <Title><b>  {title}</b></Title>
            </LogoContainer>
            <Button
              onClick={this.goTo.bind(this, homeOrSplash)}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'offers')}
                  >
                    Your Offers
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'requests')}
                  >
                    Your Requests
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'addbook')}
                  >
                    Add Book
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'yourbooks')}
                  >
                    Your Books
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    authentication: state.auth,
    books: state.books
  }
}

export default connect(mapStateToProps, actions)(App);
