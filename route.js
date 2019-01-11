
import React, { Component } from 'react';
import { NavLink, Switch, Route,BrowserRouter } from 'react-router-dom';

import Forgotpassword from './containers/account/forgotpassword';
import Login  from './containers/account/login';
import Signup from './containers/account/Signup';
import Test from './main';


const Main = () => (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/Forgotpassword' component={Forgotpassword}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/login' component={Login}/>
      <Route component={Test}/>
    </Switch>
  )
 export default Main;