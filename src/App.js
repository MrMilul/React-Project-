import React from 'react';
import {Route,Switch} from 'react-router-dom'

import './App.css';

import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

import Home from './Components/Components/Home'
import News from './Components/Components/News'
import ContactUs from './Components/Components/ContactUs'
import Details from './Components/Components/Details'
import NotFound from './Components/Components/NotFound'

function App() {
  return (
    <>
    <Navbar/>       
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/news' component={News}/>
          <Route path='/contact' component={ContactUs}/>
          <Route path='/details' component={Details}/>
          <Route component={NotFound}/>
        </Switch>
    <Footer/>
    </>
  );
}

export default App;
