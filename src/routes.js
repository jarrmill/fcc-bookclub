import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Splash from './Splash/Splash'
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import AddBook from './Addbook/addbook';
import UserBooks from './Userbooks/UserBooks';
import Offers from './Offers/Offers';
import Requests from './Requests/Requests';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { autoRehydrate, persistStore } from 'redux-persist';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './Reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers);
/*export const store = compose(
  applyMiddleware(reduxThunk, reduxPromise),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store);*/
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history} component={App}>
          <div>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/splash" render={(props) => <Splash auth={auth} {...props} /> } />
            <Route path="/home" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <Home auth={auth} {...props} />
              )
            )} />
            <Route path="/profile" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <Profile auth={auth} {...props} />
              )
            )} />
            <Route path="/offers" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <Offers auth={auth} {...props} />
              )
            )} />
            <Route path="/requests" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <Requests auth={auth} {...props} />
              )
            )} />
            <Route path="/yourbooks" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <UserBooks auth={auth} {...props} />
              )
            )} />
            <Route path="/addbook" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/splash"/>
              ) : (
                <AddBook auth={auth} {...props} />
              )
            )} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </div>
        </Router>
      </Provider>
  );
}
