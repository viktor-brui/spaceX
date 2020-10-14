import React from 'react';
import Features from './components/Features/Features';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './style.css';
import Details from './components/Details/Details';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Footer />
            {/* <Calendar /> */}
      {/* <Details /> */}
    </>
    

  );
}

export default App;
