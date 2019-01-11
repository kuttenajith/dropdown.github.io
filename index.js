
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route,BrowserRouter } from 'react-router-dom';

import Login  from './containers/account/login';

import Main from './route';

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    
     
      
   , document.getElementById('root'));