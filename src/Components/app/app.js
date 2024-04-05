import React from 'react'
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Main from '../main'
import TrainPage from '../train';
import Results from '../results';
import Coach from '../coach';
import Shop from '../shop';
import Advice from '../advice';
import Contacts from '../contacts';
import AppHeader from '../header/header';
import Footer from '../footer/footer'
import BookingPage from '../booking/booking';
import './app.css'
 
const App = () => {
    return (
      <Router>{/* Обертка для использования маршрутизации */}
        <div>  
          <AppHeader/>
          <Routes>{/* Обертка для определения маршрутов */}
            <Route path="/" element={<Main />} />{/* Маршруты страницы */}
            <Route path="/train" element={<TrainPage />} />
            <Route path="/results" element={<Results />} />
            <Route path="/coach" element={< Coach/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/booking/:id" element={<BookingPage />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    );
  }

export default App;

