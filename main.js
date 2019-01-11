import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content1 from './components/content1/content1';
import Content2 from './components/content2/content2';
import table from './components/table/table';
import form from './components/form/form'
import address from './components/address/addresscomponent';
import country from './components/country/countrycomponent';


const Main = () => (
  <Switch>
    <Route path='/test/Content1' component={Content1}/>
    <Route path='/test/Content2' component={Content2}/>
    <Route path='/test/table' component={table}/>
    <Route path='/test/form' component={form}/>
    <Route path='/test/address' component={address}/>
    <Route path='/test/country' component={country}/>
    
  </Switch>
)


export default Main;