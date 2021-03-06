import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import setAuthToken from './content/utils/setAuthToken';
import './App.css';
import Profile from './content/components/Profile'
import Welcome from './Welcome'
import Main from './content/components/Main'
import Request from './content/components/Request'
import Friends from './Friends' 
import Navbar from './content/components/Navbar'
import Login from './content/components/Login'
import Signup from './content/components/Signup'
import Edit from './content/components/Edit'
import 'bootstrap/dist/css/bootstrap.min.css' 
import axios from 'axios'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const user = localStorage.getItem(`jwtToken`)

  return <Route {...rest} render={(props) => (
        user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
      )} 
  />
}

function App() {

  let [currentUser, setCurrentUser] = useState("")
  let [isAuthenticated, setIsAuthenticated] = useState(true)
  let [allFriendsArray, setAllFriendsArray] = useState([])

  useEffect(() => {
    let token;

    axios.get(`${process.env.REACT_APP_API}/api/users`)
        .then(allFriends => {
            console.log('these are all the users', allFriends.data)
            setAllFriendsArray(allFriends.data)
        })
        .catch(err => console.log(err))

    if(localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
      setIsAuthenticated(true);
    }
  }, [])

  let nowCurrentUser = (userData) => {
    console.log("oh hey this is even running")
    setCurrentUser(userData);
    setIsAuthenticated(true)
  }

  let handleLogout = () => {
    if(localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  // console.log('Current User = ', currentUser);
  // console.log('Authenticated = ', isAuthenticated);


  const data = {
          avatar: "", 
          name: "" ,
          location:"",
          categories: "",
          about: ""
  }

  return (
    <Router>
      <div>
        <nav>
          <Navbar handleLogout={handleLogout} isAuthed={isAuthenticated}/> 
        </nav> 
      </div>
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <PrivateRoute path='/Profile' component={ Profile } user={currentUser} />
        <Route path="/Main" render={() => <Main blog={data} user={currentUser} friends={allFriendsArray} />} />  
        <Route path="/Requests" render={() => <Request blog={data} user={currentUser} friends={allFriendsArray} />} /> 
        <Route path="/Friends" render={() => <Friends user={currentUser} />} /> 
        <Route path='/Login' render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} /> } />
        <Route path="/Signup" component={Signup} /> 
        <Route path="/Edit" render={() => <Edit user={currentUser} />}  /> 

      </div>
    </Router>
  );
}

export default App;