import './App.css';
import React, { useState, useEffect } from 'react';
import { Session } from './requests';
import JourneyIndexPage from './components/JourneyIndexPage';
import JourneyShowPage from './components/JourneyShowPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewJourneyPage from './components/NewJourneyPage';
import { User } from './requests';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
// import NotFoundPage from './components/NotFoundPage';
// import GiftPage from "./components/GiftPage";


export default function App() {
  const [ user, setUser ] = useState(null) //init value will be null


  useEffect(() => {
    getCurrentUser();
  }, [])


  const getCurrentUser = () => {
    return User.current().then(user => {

      if (user?.id){
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser( null )}



    return (
      <BrowserRouter>
        <NavBar currentUser={user} onSignOut={onSignOut} />
        <Switch>
          <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}//{...routeProps} = prop1, onSignIn={getCurrentUser} = prop2
          >
          </Route>
          <Route exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
          ></Route>
          <Route exact path='/journeys' component={JourneyIndexPage} />
          <AuthRoute isAuthenticated={!!user} exact path='/journeys/new' component={NewJourneyPage} />
          <Route exact path='/journeys/:id' component={JourneyShowPage}></Route>
          {/* <Route path='/gift/:id' component={GiftPage}/> */}
          {/* <Route component={NotFoundPage}></Route> */}
        </Switch>
      </BrowserRouter>
    );

}
