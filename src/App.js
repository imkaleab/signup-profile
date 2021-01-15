import React from 'react';
import Header from './Header';
import './App.css';
import './frb/config';
import Signup from './webpages/Signup';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { UserProvider } from './frb/userprovider'
import Profile from './webpages/profile';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Header/>
      <div className="app">
        <div className="ui grid container"></div>
          <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/profile/:id' component={Profile} />
          </Switch>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
