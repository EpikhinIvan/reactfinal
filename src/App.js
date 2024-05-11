import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 

import Main from './Pages/homePage/homePage';
import TrainPage from './Components/train/train.tsx';
import Results from './Components/results';
import CoachPage from './Components/lolkek';
import Shop from './Components/shop';
import AdvicePage from './Pages/advicePage/advicePage';
import ContactPage from './Pages/contactPage/contactPage';
import AppHeader from './Components/header';
import Footer from './Components/footer/footer.tsx';

import BookingPage from './Components/booking/booking.tsx';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}> {/* Обертка для использования Redux */}
      <Router>
        <div>
          <AppHeader />
          <Routes>  
            <Route path="/" element={<Main />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/results" element={<Results />} />  
            <Route path="/coach" element={<CoachPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/advice" element={<AdvicePage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />  
          </Routes>
          <Footer />
        </div> 
      </Router>
    </Provider>
  );
};

export default App;

