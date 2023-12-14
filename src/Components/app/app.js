import React, { Component } from 'react'
import AppHeader from '../header'
import Glavnaya from '../glavnaya'
import './app.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainPage from '../train';
import Nutrition from '../nutrition';
import Results from '../results';
import Coach from '../coach';
import Shop from '../shop';
import Advice from '../advice';
import Contacts from '../contacts';
 

export default class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <AppHeader />
          <Routes>
            <Route path="/" element={<Glavnaya />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/results" element={<Results />} />
            <Route path="/coach" element={< Coach/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

