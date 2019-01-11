import React from 'react'
import Header from './components/header';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';

import Content1 from './components/content1/content1';
import Content2 from './components/content2/content2';
import table from './components/table/table';

const Test = () => (
  <div>
    <Header />
    <h2>test content</h2>
    <Switch>
    <Route path='/test/Content1' component={Content1}/>
    <Route path='/test/Content2' component={Content2}/>
    <Route path='/test/table' component={table}/>
  </Switch>
    <Footer/>
  </div>
)

export default Test;

